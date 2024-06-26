import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  const [term, setTerm] = useState("");

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={()=>searchApi(term)} />

        {
          errorMessage ? <Text>{errorMessage}</Text> : null
          // ? bu işaret den sonra varsa anlamı taşır
          // : bu işaret ise 
        }

        {results.length == 0 ? <></> : (
          <>
          <ResultsList
        title="Ucuz Restorantlar"
        results={filterResultByPrice("₺")}
      />
      <ResultsList
        title="Uygun Restorantlar"
        results={filterResultByPrice("₺₺")}
      />
      <ResultsList
        title="Pahalı Restorantlar"
        results={filterResultByPrice("₺₺₺")}
      />
          </>
        )}

      
    </View>
  );
}

const styles = StyleSheet.create({});
