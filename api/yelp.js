import axios from "axios";

//İstek atılacak API
//https://api.yelp.com/v3/businesses/search?term=Kebap&location=Ankara&limit=50
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -mRw1MG4UDwOJW7fxbb_wn2ng8QMJQpEg_XmCexBtUwQeTnbDYH-p56vFHM1En939HAfPQP2ZoND8hAxbE6Y8A_hvnqK6IzdyHn7B1XG_h5telaoRL5NoipluRgpZnYx",
  },
});
