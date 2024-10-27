import { notification } from "antd";
import React from "react";

const AvailablePlayerCard = ({
  id,
  name,
  picture,
  country,
  rating,
  role,
  price,
  coin,
  selectedPlayerList,
  setSelectedPlayerList,
}) => {
  function selectPlayer() {
    const alreadySelected = selectedPlayerList.find(
      (player) => player.id === id
    );

    if (coin < price) {
      notification.warning({
        message: "You don't have enough coin",
        showProgress: true,
        duration: 3,
      });
    } else if (alreadySelected) {
      notification.warning({
        message: "This player has already chosen",
        showProgress: true,
        duration: 3,
      });
    } else {
      setSelectedPlayerList([
        ...selectedPlayerList,
        { id, name, picture, role },
      ]);
    }
  }

  return (
    <div className="grow min-w-52 w-72 max-w-96 border rounded-lg p-6 flex flex-col gap-4">
      <img src={picture} />

      <div className="flex items-center gap-3">
        <img src="assets/user-avatar.png" alt="" />
        <p className="text-sm font-semibold">{name}</p>
      </div>

      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2">
          <img src="assets/flag.png" alt="" />
          <p className="text-xs text-gray-500">{country}</p>
        </div>

        <p className="text-[14px] py-1 px-3 bg-gray-100 rounded-md">{role}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-xs font-bold">Rating</p>
        <p className="text-xs bold text-gray-500">{rating}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-xs font-bold">Left-Hand-Bat</p>
        <p className="text-xs bold text-gray-500">Left-Hand-Bat</p>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-xs font-bold">Price: ${price}</p>
        <button
          className="text-[14px] px-3 py-1.5 border rounded-lg"
          onClick={selectPlayer}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default AvailablePlayerCard;
