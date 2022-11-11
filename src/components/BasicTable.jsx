import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const BasicTable = ({rows}) => {
  return (
	<div className = "mt-12">
	  <p className = "text-2xl text-gray-500 dark:text-gray-300 font-semibold text-center">
		Latest Orders
	  </p>
	  <TableContainer component = {Paper}
					  sx = {{
						maxWidth                   : "90%",
						margin                     : "1rem auto",
						'@media (min-width: 780px)': {
						  maxWidth: '450px',
						},
						'@media (min-width: 1080px)': {
						  maxWidth: '70%',
						},
					  }}
					  className = "dark:bg-secondary-dark-bg p-4 overflow-scroll"
	  >
		<Table aria-label = "simple table"
		>
		  <TableHead className = ""
		  >
			<TableRow>
			  <TableCell className = "dark:text-gray-200">Tracking ID</TableCell>
			  <TableCell className = "dark:text-gray-200">Product</TableCell>
			  <TableCell className = "dark:text-gray-200">Customer</TableCell>
			  <TableCell className = "dark:text-gray-200">Date</TableCell>
			  <TableCell className = "dark:text-gray-200">Amount</TableCell>
			  <TableCell className = "dark:text-gray-200">Payment Method</TableCell>
			  <TableCell className = "dark:text-gray-200">Status</TableCell>
			</TableRow>
		  </TableHead>
		  <TableBody>
			{rows.map((row) => (
			  <TableRow key = {row.id}>
				<TableCell className = "dark:text-gray-200">{row.id}</TableCell>
				<TableCell className = "dark:text-gray-200">
				  <div className = "cellWrapper">
					<img src = {row.img}
						 alt = ""
						 style = {{
						   width : "50px",
						   margin: "0 auto 0.75rem",
						 }}
					/>
					<p className = "text-center">
					  {row.product}
					</p>
				  </div>
				</TableCell>
				<TableCell className = "dark:text-gray-200">{row.customer}</TableCell>
				<TableCell className = "dark:text-gray-200">{row.date}</TableCell>
				<TableCell className = "dark:text-gray-200">{row.amount}</TableCell>
				<TableCell className = "dark:text-gray-200">{row.method}</TableCell>
				<TableCell className = "dark:text-gray-200">
				<span className = {`${row.status === "Approved"
									  ? "text-green-600 bg-green-100"
									  : "text-amber-600 bg-amber-100"} p-2 rounded-lg`}
				>{row.status}</span>
				</TableCell>
			  </TableRow>
			))}
		  </TableBody>
		</Table>
	  </TableContainer>
	</div>
  );
};

export default BasicTable;