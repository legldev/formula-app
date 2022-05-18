import axios from "axios";

const getDrivers = async (seasonYear) => {
    try {
      return await axios.get(
        `https://api-formula-1.p.rapidapi.com/rankings/drivers?season=${seasonYear}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "api-formula-1.p.rapidapi.com",
            "x-rapidapi-key":
              "09e40d3773msh5e68be67186ac10p1c6dddjsn736fcd5ee02f",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .catch((err) => {
          console.log(err);
        });
        
    } catch (err) {
      console.log(err);
    }
  };
  
  export default getDrivers;