import * as React from "react";
import { StyleSheet, SafeAreaView, Pressable, Text } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Field from "./../components/Field";

export default function TabOneScreen() {
  const viewPlayers = () => {
    console.log("view players");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Field />
      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  buttonContainer: {
    backgroundColor: "orange",
    width: "90%",
    margin: 20,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
    marginTop: "auto",
  },
});
