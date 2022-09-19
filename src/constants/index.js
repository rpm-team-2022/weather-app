export const options = {
  headers: {
    // eslint-disable-next-line no-undef
    "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const Base_URL = "https://weatherapi-com.p.rapidapi.com/current.json";
