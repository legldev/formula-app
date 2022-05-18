import axios from "axios";
import { BASE_URL, handleError, handleResponse } from "../Helpers/utils";

const nextRace = async () => {
    return axios
    .get(`${BASE_URL}/races?next=3&type=Race`,         
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-rapidapi-key":
          "09e40d3773msh5e68be67186ac10p1c6dddjsn736fcd5ee02f",
      },
    })
    .then(handleResponse)
    .catch(handleError);
  };

  const lastRace = async () => {
    return axios
    .get(`${BASE_URL}/races?last=1&type=Race`,         
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-rapidapi-key":
          "09e40d3773msh5e68be67186ac10p1c6dddjsn736fcd5ee02f",
      },
    })
    .then(handleResponse)
    .catch(handleError);
  };
  
  export { nextRace, lastRace };