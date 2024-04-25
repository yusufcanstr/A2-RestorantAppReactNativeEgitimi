import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ResultShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response);
  };

  useEffect(() => {
    getResult(id);
  }, []); // burda ki [] bu parentezler API isteğe bir kez yollar.

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.data.name}</Text>
      <Text style={styles.phone}>{result.data.phone}</Text>
      <View style={styles.icons}>
        {result.data.is_closed ? (
          <AntDesign name="closecircleo" size={34} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={34} color="black" />
        )}
      </View>
      <FlatList
        data={result.data.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10,
  },
  phone: {
    alignSelf: "center",
    fontSize: 20,
  },
  icons:{
    alignSelf: 'center',
    
  }
});
