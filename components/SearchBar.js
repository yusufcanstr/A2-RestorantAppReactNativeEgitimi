import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange , onTermSubmit}) {
  return (
    <View style={styles.backgorundStyle}>
      <Feather style={styles.iconStyle} name="search" size={24} color="black" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Ara"
        value={term}
        onChangeText={onTermChange} // Yazı değiştiği
        autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={onTermSubmit} // Yazım bitti
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgorundStyle: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    margin: 10,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
  },
  iconStyle: {
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
