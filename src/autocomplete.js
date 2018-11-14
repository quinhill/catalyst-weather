import { googleKey } from './apiKey';


export const getLocations = async (input) => {
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=geocode&language=fr&key=AIzaSyCOVnDESyCL8z8Uxa_C45NEWL4ChLCxzTA`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
}