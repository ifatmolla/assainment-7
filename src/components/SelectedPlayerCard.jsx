import React from "react";

const SelectedPlayerCard = ({
  id,
  name,
  role,
  picture,
  selectedPlayerList,
  setSelectedPlayerList,
}) => {
  function removePlayer() {
    const newSelectedPlayerList = [...selectedPlayerList];

    const deletePlayerindex = selectedPlayerList.findIndex(
      (player) => player.id === id
    );

    newSelectedPlayerList.splice(deletePlayerindex, 1);

    setSelectedPlayerList(newSelectedPlayerList);
  }
  return (
    <div className="grow w-full p-6 flex justify-between items-center gap-4 border rounded-xl">
      <img src={picture} alt="" className="w-20 h-20 rounded-xl" />
      <div className="grow flex flex-col gap-2 justify-center">
        <h6 className="font-semibold text-lg">{name}</h6>
        <p className="text-gray-500">{role}</p>
      </div>

      <img
        src="assets/delete.png"
        alt=""
        className="cursor-pointer"
        onClick={removePlayer}
      />
    </div>
  );
};

export default SelectedPlayerCard;
