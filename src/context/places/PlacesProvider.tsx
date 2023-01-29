import { useEffect, useReducer } from "react";
import { searchApi } from "../../api";
import { getUserLocation } from "../../helpers";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { Feature, PlacesResponses } from "../../interfaces/places";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
  isLoadingPlaces: boolean;
  places: Feature[];
}

const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: [],
};

interface Props {
  children: JSX.Element;
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lnglat) =>
      dispatch({ type: "setUserLocation", payload: lnglat })
    );
  }, []);

  const SearchPlacesByTerm = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) {
      dispatch({ type: "setPlaces", payload: [] });
      return [];
    }
    if (!state.userLocation) throw new Error("No hay ubicación del usuario!");

    dispatch({ type: "setLoadingPlaces" });

    const resp = await searchApi.get<PlacesResponses>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(","),
      },
    });

    dispatch({ type: "setPlaces", payload: resp.data.features });

    return resp.data.features;
  };

  return (
    <PlacesContext.Provider value={{ ...state, SearchPlacesByTerm }}>
      {children}
    </PlacesContext.Provider>
  );
};
