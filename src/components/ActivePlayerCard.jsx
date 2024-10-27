import React from "react";

const ActivePlayerCard = ({
  id,
  name,
  selectedPlayerList,
  setSelectedPlayerList,
}) => {
  function selectPlayer() {
    setSelectedPlayerList([...selectedPlayerList, { id, name }]);
  }

  return (
    <div className="grow min-w-40 max-w-52 h-52 flex flex-col gap-4 justify-center items-center border">
      <h3 className="text-xl"> {name}</h3>
      <button className="text-lg bg-gray-200" onClick={selectPlayer}>
        Select
      </button>
    </div>
  );
};

export default ActivePlayerCard;
