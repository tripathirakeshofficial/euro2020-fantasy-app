import { atom } from "recoil";
import { Player } from "../types";

export const myPlayersState = atom({
  key: "MyPlayersState",
  default: [] as Player[],
});
