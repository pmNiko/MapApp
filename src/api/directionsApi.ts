import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoibmlrb2Rldjg5IiwiYSI6ImNsZGR3MW1vdzA1bnUzcGx5bHFnN2NweHoifQ.bJZYcWePN-71V3G_NucoAw'
    }
})


export default directionsApi