import React from 'react';
import DataTable from "../../components/DataTable.jsx";
import {
  employeesColumns,
  employeesRows
} from "../../data/dummy.jsx";

function Employees(props) {
  return (
	<div className = "mt-20 md:mt-8">
	  <DataTable title = "employees"
				 rows = {employeesRows}
				 columns = {employeesColumns}
	  ></DataTable>
	</div>
  );
}

export default Employees;