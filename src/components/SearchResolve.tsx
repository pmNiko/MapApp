import { useContext, useState } from "react";
import { PlacesContext, MapContext } from "../context";
import { Feature } from "../interfaces/places";
import { LoadingPlaces } from "./LoadingPlaces";

export const SearchResolve = () => {
  const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState("");

  const onPlaceClicked = (place: Feature) => {
    setActiveId(place.id);
    const [lng, lat] = place.center;

    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;

    const [lng, lat] = place.center;

    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) return <LoadingPlaces />;

  // if (places.length === 0) return <></>;

  return (
    <ul className={`${places.length === 0 ? "list-group" : "list-group mt-3"}`}>
      {places.map((place) => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            place.id === activeId ? "active" : ""
          } `}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.place_name_es}</h6>
          <p
            style={{
              fontSize: "12px",
            }}
          >
            {place.text}
          </p>

          <button
            onClick={() => getRoute(place)}
            className={`btn ${
              place.id === activeId
                ? "btn-outline-light"
                : "btn-outline-primary"
            } btn-sm`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
