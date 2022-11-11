import React from 'react';
import DataTable from "../../components/DataTable.jsx";
import {
  customersColumns,
  customersRows
} from "../../data/dummy.jsx";

function Customers(props) {
  return (
	<div className = "mt-20 md:mt-8">
	  <DataTable title = "customers"
				 rows = {customersRows}
				 columns = {customersColumns}
	  ></DataTable>
	</div>
  );
}

export default Customers;