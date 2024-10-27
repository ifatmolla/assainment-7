import React from "react";
import AvailablePlayerCard from "./AvailablePlayerCard";

const availablePlayers = [
  {
    id: 1,
    picture: "assets/player-picture.png",
    name: "Virat Kohli",
    country: "India",
    rating: 9.8,
    role: "Batsman",
    price: 1000000,
  },
  {
    id: 2,
    picture: "assets/player-picture.png",
    name: "Kane Williamson",
    country: "New Zealand",
    rating: 9.5,
    role: "Batsman",
    price: 950000,
  },
  {
    id: 3,
    picture: "assets/player-picture.png",
    name: "Jasprit Bumrah",
    country: "India",
    rating: 9.4,
    role: "Bowler",
    price: 920000,
  },
  {
    id: 4,
    picture: "assets/player-picture.png",
    name: "Steve Smith",
    country: "Australia",
    rating: 9.6,
    role: "Batsman",
    price: 890000,
  },
  {
    id: 5,
    picture: "assets/player-picture.png",
    name: "Ben Stokes",
    country: "England",
    rating: 9.3,
    role: "All-rounder",
    price: 870000,
  },
  {
    id: 6,
    picture: "assets/player-picture.png",
    name: "Shaheen Afridi",
    country: "Pakistan",
    rating: 9.1,
    role: "Bowler",
    price: 840000,
  },
  {
    id: 7,
    picture: "assets/player-picture.png",
    name: "Rashid Khan",
    country: "Afghanistan",
    rating: 9.4,
    role: "Bowler",
    price: 820000,
  },
  {
    id: 8,
    picture: "assets/player-picture.png",
    name: "Quinton de Kock",
    country: "South Africa",
    rating: 9.2,
    role: "Wicketkeeper",
    price: 800000,
  },
  {
    id: 9,
    picture: "assets/player-picture.png",
    name: "David Warner",
    country: "Australia",
    rating: 9.1,
    role: "Batsman",
    price: 780000,
  },
  {
    id: 10,
    picture: "assets/player-picture.png",
    name: "Joe Root",
    country: "England",
    rating: 9.0,
    role: "Batsman",
    price: 750000,
  },
  {
    id: 11,
    picture: "assets/player-picture.png",
    name: "Shakib Al Hasan",
    country: "Bangladesh",
    rating: 9.3,
    role: "All-rounder",
    price: 730000,
  },
  {
    id: 12,
    picture: "assets/player-picture.png",
    name: "Kagiso Rabada",
    country: "South Africa",
    rating: 9.2,
    role: "Bowler",
    price: 700000,
  },
];

const AvailablePlayerList = ({
  coin,
  selectedPlayerList,
  setSelectedPlayerList,
}) => {
  return (
    <div className="flex flex-wrap gap-6">
      {availablePlayers.map((player) => (
        <AvailablePlayerCard
          id={player.id}
          name={player.name}
          picture={player.picture}
          country={player.country}
          rating={player.rating}
          role={player.role}
          price={player.price}
          coin={coin}
          selectedPlayerList={selectedPlayerList}
          setSelectedPlayerList={setSelectedPlayerList}
        />
      ))}
    </div>
  );
};

export default AvailablePlayerList;
