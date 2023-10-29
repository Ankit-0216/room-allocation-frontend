import React from "react";
import Button from "../../utils/Button";

import { EmployeeTable } from "../../utils/EmployeeTable";

function Employees() {
  return (
    <>
      <div className="flex justify-end mb-5">
        <Button name="Add Employee" style="mx-2" />
        <Button name="Add Employee By CSV" />
      </div>
      <div>
        <EmployeeTable />
      </div>
    </>
  );
}

export default Employees;
