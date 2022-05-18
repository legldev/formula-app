import axios from "axios";

const nextRace = async () => {
    try {
      await axios.get(
        `https://api-formula-1.p.rapidapi.com/races?next=3`,
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

  const lastRace = async () => {
    try {
        axios.get(
        `https://api-formula-1.p.rapidapi.com/races?last=1`,
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
  
  export { nextRace, lastRace };