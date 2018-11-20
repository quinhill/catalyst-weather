import { googleKey } from "./apiKey";

export const geocode = async (lat, long) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${googleKey}`;
  const response = await fetch(url);
  const address = await response.json();
  return address.results[0].address_components[6].long_name;
}