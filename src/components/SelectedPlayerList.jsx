import React from "react";
import SelectedPlayerCard from "./SelectedPlayerCard";

const SelectedPlayerList = ({
  setActiveTab,
  selectedPlayerList,
  setSelectedPlayerList,
}) => {
  function addMorePlayer() {
    setActiveTab("available");
  }

  return (
    <div className="flex flex-col py-5 gap-6">
      {selectedPlayerList.map((player) => (
        <SelectedPlayerCard
          id={player.id}
          name={player.name}
          role={player.role}
          picture={player.picture}
          selectedPlayerList={selectedPlayerList}
          setSelectedPlayerList={setSelectedPlayerList}
        />
      ))}

      <div className="border border-black p-1 rounded-lg w-fit">
        <button
          className="text-xs font-bold bg-[#E7FE29] p-3 rounded-lg"
          onClick={addMorePlayer}
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerList;
