import React, { useState } from "react";
import AvailablePlayerList from "./AvailablePlayerList";
import SelectedPlayerList from "./SelectedPlayerList";

const PlayersContainer = ({ coin }) => {
  const [activeTab, setActiveTab] = useState("available");
  const [selectedPlayerList, setSelectedPlayerList] = useState([]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between gap-4">
        <h4 className="text-lg font-bold">Available Players</h4>
        <div className="border rounded-lg">
          <button
            className="text-xs px-4 py-2"
            style={{
              background: activeTab === "available" && "#E7FE29",
              fontWeight: activeTab === "available" && "bold",
            }}
            onClick={() => setActiveTab("available")}
          >
            Available
          </button>
          <button
            className="text-xs px-4 py-2"
            style={{
              background: activeTab === "selected" && "#E7FE29",
              fontWeight: activeTab === "selected" && "bold",
            }}
            onClick={() => setActiveTab("selected")}
          >
            Selected ({selectedPlayerList.length})
          </button>
        </div>
      </div>

      <div
        className="mb-48"
        style={{ display: activeTab === "selected" && "none" }}
      >
        <AvailablePlayerList
          coin={coin}
          selectedPlayerList={selectedPlayerList}
          setSelectedPlayerList={setSelectedPlayerList}
        />
      </div>

      <div
        className="mb-48"
        style={{ display: activeTab === "available" && "none" }}
      >
        <SelectedPlayerList
          setActiveTab={setActiveTab}
          selectedPlayerList={selectedPlayerList}
          setSelectedPlayerList={setSelectedPlayerList}
        />
      </div>
    </div>
  );
};

export default PlayersContainer;
