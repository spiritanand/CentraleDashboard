import {DataGrid} from '@mui/x-data-grid';

export default function DataTable({title, rows, columns}) {
  return (
	<>
	  <p className = "text-2xl mb-3 text-gray-500 dark:text-gray-300 font-semibold text-center uppercase">
		{title}
	  </p>
	  <div
		style = {{
		  height: "75vh",
		  width : 'min(750px,85%)',
		  margin: "0 auto",
		}}
	  >
		<DataGrid
		  rows = {rows}
		  columns = {columns}
		  pageSize = {9}
		  rowsPerPprsOptions = {[5]}
		  checkboxSelection
		  className={"dark:text-gray-300 dark:bg-gray-600"}
		/>
	  </div>
	</>
  );
}