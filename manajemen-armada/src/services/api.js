import axios from "axios";

const API_BASE = "https://api-v3.mbta.com";

export const getVehicles = (params = {}) => {
  return axios.get(`${API_BASE}/vehicles`, { params });
};

export const getRoutes = () => {
  return axios.get(`${API_BASE}/routes`);
};

export const getTrips = () => {
  return axios.get(`${API_BASE}/trips`);
};
