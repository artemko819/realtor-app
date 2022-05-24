import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
const headers = {
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  "X-RapidAPI-Key": "60367a7afdmshc605e0a3eeaa174p1839ffjsna2f7abdb5e87",
};
export const fetchApi = async (url) => {
  const { data } = await axios.get((baseUrl+url), {headers});
  return data;
};
