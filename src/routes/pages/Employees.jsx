import React from "react";
import AddEmployeeModal from "../../components/AddEmployeeModal";
import AddEmployeeCsvModal from "../../components/AddEmployeeCsvModal"

import { EmployeeTable } from "../../utils/EmployeeTable";

function Employees() {
  return (
    <>
      <div className="flex justify-end mb-5">
        <AddEmployeeModal />
        <AddEmployeeCsvModal />
      </div>
      <div>
        <EmployeeTable />
      </div>
    </>
  );
}

export default Employees;
