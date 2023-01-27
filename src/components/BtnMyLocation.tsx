import { useContext } from "react";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  /**
   * Button for location user map
   */
  const onClick = () => {
    if (!isMapReady) throw new Error("Mapa no está listo");
    if (!userLocation) throw new Error("No hay ubicación del usuario");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 999,
        backgroundColor: "rgba(169, 218, 234, 0.8)",
        borderRadius: "15%",
      }}
      onClick={onClick}
      type="button"
      className="btn  btn-md"
    >
      <span className="material-symbols-outlined" style={{ color: "white" }}>
        location_on
      </span>
    </button>
  );
};
