import React, { useRef, Suspense } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
  View,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Field from "./../components/Field";
import TeamStats from "./../components/TeamStats";

import BottomSheet from "@gorhom/bottom-sheet";

import Filters from "./../components/Filters";
import PlayersList from "./../components/PlayersList";

export default function TabOneScreen() {
  const playerBottomSheet = useRef<BottomSheet>(null);
  const filtersBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playerBottomSheet.current?.expand();
  };

  const openFilters = () => {
    filtersBottomSheet.current?.expand();
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
        <Pressable onPress={openFilters} style={styles.buttonContainer}>
          <Text>Filters</Text>
        </Pressable>
        <Suspense
          fallback={
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="large"
                color="#72cc5e"
              ></ActivityIndicator>
            </View>
          }
        >
          <PlayersList />
        </Suspense>
      </BottomSheet>
      <BottomSheet ref={filtersBottomSheet} index={0} snapPoints={snapPoints}>
        <Filters />
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
    marginTop: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
