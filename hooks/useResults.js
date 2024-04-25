import { useEffect } from "react";
import { useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "İstanbul",
        },
      });

      setResult(response.data.businesses);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Bağlantı hatası');
    }

    //console.log(response);
  };

  useEffect(() => {
    searchApi("Kebap");
  }, []);

  return [searchApi, results, errorMessage];
};
