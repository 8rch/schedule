import "./App.css";
import * as React from "react";
import { useTable } from "react-table";
import Schedule from "./Table";

function App() {
	const columns = React.useMemo(
		() => [
			{
				Header: "User",
				accessor: "user",
			},
			{
				Header: "Monday",
				accessor: "monday",
			},
			{
				Header: "Tuesday",
				accessor: "tuesday",
			},
			{
				Header: "Wednesday",
				accessor: "wednesday",
			},
			{
				Header: "Thursday",
				accessor: "thursday",
			},
			{
				Header: "Friday",
				accessor: "friday",
			},
		],
		[]
	);

	const [data, setData] = React.useState(
		() => [
			{
				user: "x1",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: "",
			},
			{
				user: "x2",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: "",
			},
			{
				user: "x3",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: "",
			},
			{
				user: "x4",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: "",
			},
			{
				user: "x5",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: "",
			},
			{
				user: "x6",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: "",
			},
			{
				user: "x7",
				monday: "",
				tuesday: "",
				wednesday: "",
				thursday: "",
				friday: "",
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	const handleMondayChange = (event, rowIndex) => {
		const newData = [...data];
		newData[rowIndex].monday = event.target.value;
		setData(newData);
	};

	return (
		<div>
			<div className='App'>
				<h1 className='title'>Schedule</h1>
				<div className='container'>
					<Schedule />
				</div>
			</div>
			<div className='App'>
				<h1 className='title'>Load</h1>
				<div className='container'>
					<table {...getTableProps()}>
						<thead>
							{headerGroups.map((headerGroup) => (
								<tr {...headerGroup.getHeaderGroupProps()}>
									{headerGroup.headers.map((column) => (
										<th {...column.getHeaderProps()}>
											{column.render("Header")}
										</th>
									))}
								</tr>
							))}
						</thead>
						<tbody {...getTableBodyProps()}>
							{rows.map((row, rowIndex) => {
								prepareRow(row);
								return (
									<tr {...row.getRowProps()}>
										{row.cells.map((cell, cellIndex) => (
											<td {...cell.getCellProps()}>
												{cellIndex === 2 && (
													<input
														type='text'
														value={data[rowIndex].monday}
														onChange={(event) =>
															handleMondayChange(event, rowIndex)
														}
													/>
												)}
												{cell.render("Cell")}
											</td>
										))}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default App;
