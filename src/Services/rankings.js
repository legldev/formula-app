import axios from "axios";
import { BASE_URL, handleError, handleResponse } from "../Helpers/utils";

const getDrivers = async (seasonYear) => {
  return axios
    .get(`${BASE_URL}/rankings/teams?season=${seasonYear}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
        "x-rapidapi-key": "09e40d3773msh5e68be67186ac10p1c6dddjsn736fcd5ee02f",
      },
    })
    .then(handleResponse)
    .catch(handleError);
};

export default getDrivers;
