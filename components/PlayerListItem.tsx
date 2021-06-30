import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Player } from "../types";

interface Props {
  player: Player;
}

const PlayerListItem = ({ player }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://media.api-sports.io/football/players/${player.id}.png`,
        }}
        style={styles.image}
      />
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.position}>{player.match}</Text>
      </View>
      <View style={styles.colContainer}>
        <Text style={styles.name}>${(player.price / 1000000).toFixed(1)}m</Text>
        <Text style={styles.position}>{player.position}</Text>
      </View>
      <Text style={styles.points}>{player.totalPoints}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "#eee",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ddd",
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
  },
  position: {
    fontSize: 10,
  },
  points: {
    fontWeight: "bold",
    fontSize: 18,
  },
  colContainer: {
    marginRight: 20,
    alignItems: "flex-end",
  },
});

export default PlayerListItem;
