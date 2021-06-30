import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Field from "./../components/Field";
import TeamStats from "./../components/TeamStats";

import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import PlayerListItem from "./../components/PlayerListItem";

import { players } from "../assets/data/players";

export default function TabOneScreen() {
  const playerBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playerBottomSheet.current?.expand();
  };

  const snapPoints = [0, "50%"];

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}>
        <Text>View Players</Text>
      </Pressable>

      <BottomSheet ref={playerBottomSheet} index={0} snapPoints={snapPoints}>
        <BottomSheetFlatList
          data={players}
          renderItem={({ item }) => <PlayerListItem player={item} />}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#72cc5e",
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
  contentContainer: {},
});
