import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultDetail from "./ResultDetail";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function ResultsList({ title, results }) {
  const navigation = useNavigation();

  //console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ResultsShow",{id:item.id})}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});
