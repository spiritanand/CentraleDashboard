import React from 'react';
import BasicTable from "../../components/BasicTable.jsx";
import {basicTableData} from "../../data/dummy.jsx";

function Orders(props) {
  return (
	<div className = "mt-20 md:mt-8">
	  <BasicTable rows = {basicTableData}></BasicTable>
	</div>
  );
}

export default Orders;