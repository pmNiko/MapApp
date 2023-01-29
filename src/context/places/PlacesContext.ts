import { createContext } from "react";
import { Feature } from "../../interfaces/places";

export interface PlacesContextProps {
    isLoading: boolean,
    userLocation?: [number, number]
    isLoadingPlaces: boolean;
    places: Feature[];

    //   Methods
    SearchPlacesByTerm: (query: string) => Promise<Feature[]>
}


export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps)