// SearchBar.js
import React from "react";
import { Image, StyleSheet, TextInput, View, Keyboard, Button } from "react-native";

export const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
   return (
      <View style={styles.container}>
         <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
            <Image source={require("../assets/mynaui_search.jpg")} style={styles.searchBarIcon} />

            <TextInput
               style={styles.input}
               placeholder="Search"
               value={searchPhrase}
               onChangeText={setSearchPhrase}
               onFocus={() => {
                  setCLicked(true);
               }}
            />

            {clicked && (
               <Entypo
                  name="cross"
                  size={20}
                  color="black"
                  style={{ padding: 1 }}
                  onPress={() => {
                     setSearchPhrase("");
                  }}
               />
            )}
         </View>
      </View>
   );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
   container: {
      margin: 10,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "80%",
      height: 48,
      borderWidth: 1,
      borderColor: "#E8D1BA",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "space-evenly",
   },
   searchBar__unclicked: {
      padding: 10,
      flexDirection: "row",
      width: "95%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
   },
   searchBar__clicked: {
      padding: 10,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "space-evenly",
   },
   input: {
      fontSize: 15,
      marginLeft: 10,
      width: "95%",
   },
    searchBarIcon:{
        backgroundColor: 'white',
        width: 24,
        height: 24,
    },
});