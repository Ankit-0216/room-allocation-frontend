import React from "react";
import Button from "../../utils/Button";

import { RoomTable } from "../../utils/RoomTable";

function Rooms() {
  return (
    <>
      <div className="flex justify-end mb-5">
        <Button name="Add Room" style="mx-2" />
        <Button name="Add Room By CSV" />
      </div>
      <div>
        <RoomTable />
      </div>
    </>
  );
}

export default Rooms;
