import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

mapboxgl.accessToken =
  "pk.eyJ1Ijoibmlrb2Rldjg5IiwiYSI6ImNsZGR3MW1vdzA1bnUzcGx5bHFnN2NweHoifQ.bJZYcWePN-71V3G_NucoAw";

/**
 * Validación sencilla para expulsar un cliente sin geolocalización
 */
if (!navigator.geolocation) {
  alert("Su navegador no tiene opción de Geolocalización.");
  throw new Error("Tu navegador no tiene opción de Geolocalización!");
}

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
