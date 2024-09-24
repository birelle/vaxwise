import { Button } from "primereact/button";
import { useState } from "react";
import { MdEditSquare, MdRemoveRedEye, MdDeleteOutline } from "react-icons/md";
import { FaCoins } from "react-icons/fa6";
import React from 'react';
import RecordVaccination from "../pages/recipient/RecordVaccination";
// import { COLORS } from "../utils/constants";

export const ActionButtonTemplate = (rowData, Column) => {
  const [showRecord, setShowRecord] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [assignCoins, setAssignCoins] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  return (
    <>
      <div className="flex gap-x-5 items-center">
        <div className="hover:bg-gray-300 rounded-md">
          <Button
            style={{ background: "none", outline: "none", border: "none" }}
            tooltipOptions={{ position: "top" }}
            tooltip="record vaccinatio"
            type="button"
            icon={<MdEditSquare size={25} />}
            onClick={() => {setShowRecord(true)}}
          />
        </div>
        <div className="hover:bg-gray-300 rounded-md">
          <Button
            style={{ background: "none", outline: "none", border: "none" }}
            tooltip="View"
            tooltipOptions={{ position: "top" }}
            type="button"
            icon={<MdRemoveRedEye size={25} color="green" />}
            className="ui-button-warning"
            // onClick={() => {setShowUser(true)}}
          />
        </div>
      </div>
      <RecordVaccination open={showRecord} onClose={() =>{setShowRecord(false)}} />
      {/* <Modal1 open={showUser} onClose={() =>{setShowUser(false)}}>
        <ViewUser data={rowData}/>
      </Modal1>
      <Modal open={assignCoins} onClose={() =>{setAssignCoins(false)}}>
        <AssignCoin data={rowData}/>
      </Modal>
      <Modal open={deleteUser} onClose={() =>{setDeleteUser(false)}}>
        <DeleteUser open={deleteUser} OnClose={() =>{setDeleteUser(false)}} data={rowData}/>
      </Modal> */}
      
    </>
  );
};