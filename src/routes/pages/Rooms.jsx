import React from "react";
import AddRoomCsvModal from "../../components/Add RoomCsvModal";
import AddRoomModal from "../../components/AddRoomModal";
import { RoomTable } from "../../utils/RoomTable";

function Rooms() {
  return (
    <>
      <div className="flex justify-end mb-5">
        <AddRoomModal />
        <AddRoomCsvModal />
      </div>
      <div>
        <RoomTable />
      </div>
    </>
  );
}

export default Rooms;
