import React from "react";
import { ImageBackground, View, Text } from "react-native";

import field from "../assets/images/field.jpg";
import FieldPlayer from "./FieldPlayer";
import { useRecoilValue } from "recoil";
import { myPlayersByPosition } from "./../atoms/MyTeam";

const Field = () => {
  const players = useRecoilValue(myPlayersByPosition);

  return (
    <ImageBackground
      source={field}
      resizeMode="contain"
      style={{
        width: "100%",
        aspectRatio: 2 / 3,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {Object.keys(players).map((position) => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          {players[position].map((player) => (
            <FieldPlayer player={player} position={position} />
          ))}
        </View>
      ))}
    </ImageBackground>
  );
};

export default Field;
