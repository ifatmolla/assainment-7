import React from "react";
import ActivePlayerCard from "./ActivePlayerCard";

const players = [
  {
    id: 1,
    name: "Sakib Al Hasan",
  },
  {
    id: 2,
    name: "Tamim Iqbal",
  },
  {
    id: 3,
    name: "Musfiqur Rahim",
  },
];

const ActivePlayerList = ({ selectedPlayerList, setSelectedPlayerList }) => {
  return (
    <div className="flex py-5 flex-wrap gap-5">
      {players.map((player) => (
        <ActivePlayerCard
          id={player.id}
          name={player.name}
          selectedPlayerList={selectedPlayerList}
          setSelectedPlayerList={setSelectedPlayerList}
        />
      ))}
    </div>
  );
};

export default ActivePlayerList;
