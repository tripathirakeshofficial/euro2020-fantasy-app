import { atom, selector } from "recoil";

const pos2pos = {
  Attacker: "FWD",
  Defender: "DEF",
  Midfielder: "MID",
  Goalkeeper: "GK",
};

export const allPlayersState = selector({
  key: "allPlayersState",
  get: async () => {
    try {
      const response = await fetch(
        "https://api-football-v1.p.rapidapi.com/v3/players?league=4&season=2020&page=3",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "3507673a76msh26739186297e792p15880djsne3a23753c349",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          },
        }
      );

      const json = await response.json();

      return json.response.map((entry) => ({
        id: entry.player.id,
        name: entry.player.name,
        match: "TBA v TBA",
        price: Math.floor(Math.random() * (15300000 - 5300000 + 1) + 5300000),
        position: pos2pos[entry.statistics[0].games.position],
        totalPoints: Math.floor(Math.random() * (60 - 10 + 1) + 10),
      }));
    } catch (e) {
      console.log(e);
      return [];
    }
  },
});

export const positionFilterState = atom({
  key: "positionFilterState",
  default: [] as string[],
});

export const filteredPlayers = selector({
  key: "filteredPlayers",
  get: ({ get }) => {
    const players = get(allPlayersState);
    const filters = get(positionFilterState);
    return players.filter(
      (player) => filters.length === 0 || filters.includes(player.position)
    );
  },
});
