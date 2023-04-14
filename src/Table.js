import React, { useState } from "react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const data = [
	{
		id: "Morning UpStairs",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Morning Down Stairs",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Morning Parking Lot",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Lunch A",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Lunch B",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Lunch C",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Lunch D",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Afternoon Up Stairs",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Afternoon Down Stairs",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
	{
		id: "Afternoon Parking Lot",
		values: {
			Monday: "",
			Tuesday: "",
			Wednesday: "",
			Thursday: "",
			Friday: "",
		},
	},
];

function Schedule() {
	const [rows, setRows] = useState(data);
	const [x1Counts, setX1Counts] = useState({
		Monday: 0,
		Tuesday: 0,
		Wednesday: 0,
		Thursday: 0,
		Friday: 0,
	});

	const addRow = () => {
		const newRow = {
			id: rows.length + 1,
			values: {
				Monday: "",
				Tuesday: "",
				Wednesday: "",
				Thursday: "",
				Friday: "",
			},
		};
		setRows([...rows, newRow]);
	};

	const handleChange = (e, id, day) => {
		const updatedRows = rows.map((row) => {
			if (row.id === id) {
				console.log(id, "++++++++++++ID");
				console.log(day, "+++++++++DAY");
				console.log(e, "++++++++++++++E");
				const newValue = e.target.value;
				console.log(newValue, "++++++++NEWVALUE");
				const oldValue = row.values[day];
				console.log(oldValue, "++++++++OldValue");
				if (oldValue === "x2" && newValue !== "x2") {
					setX1Counts({
						...x1Counts,
						[day]: x1Counts[day] - 1,
					});
				} else if (oldValue !== "x2" && newValue === "x2") {
					setX1Counts({
						...x1Counts,
						[day]: x1Counts[day] + 1,
					});
				}
				return {
					...row,
					values: {
						...row.values,
						[day]: newValue,
					},
				};
			}
			return row;
		});
		setRows(updatedRows);
	};

	// This code defines a function called handleChange that takes three arguments: e, id, and day. The purpose of this function is to handle changes to the value of an input field within a table row.

	// The function first creates a new array called updatedRows using the map function. It loops through each row in the rows array and checks if the id of the current row matches the id passed to the function. If it does match, the function logs some information about the change and retrieves the new value of the input field.

	// Next, the function checks if the old value of the input field was "x2" and the new value is not "x2". If this is the case, it means that the "x1Counts" object needs to be updated to reflect the fact that the "x1" value is no longer present in that day's row. The function does this by updating the x1Counts object with a new value for that day.

	// Similarly, if the old value of the input field was not "x2" and the new value is "x2", it means that the "x1Counts" object needs to be updated to reflect the fact that the "x1" value is now present in that day's row.

	// Finally, the function returns a new object representing the updated row with the new input value. This object is merged with the existing row object using the spread operator.

	// After looping through all the rows in the rows array, the function sets the state of the rows array to the new updatedRows array, effectively updating the table with the new values.

	return (
		<div className='table-container'>
			<table>
				<thead>
					<tr>
						<th> </th>
						{daysOfWeek.map((day) => (
							<th key={day}>
								{day} ({x1Counts[day]})
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={row.id}>
							<td>{row.id}</td>
							{daysOfWeek.map((day) => (
								<td key={`${row.id}_${day}`}>
									<select
										value={row.values[day]}
										onChange={(e) => handleChange(e, row.id, day)}>
										<option value=''>--Choose an option--</option>
										<option value='x1'> x1</option>
										<option value='x2'> x2</option>
										<option value='x3'> x3</option>
										<option value='x4'> x4</option>
										<option value='x5'> x5</option>
										<option value='x6'> x6</option>
										<option value='x7'> x7</option>
										<option value='x8'> x8</option>
									</select>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<button onClick={addRow}>Add Row</button>
		</div>
	);
}

export default Schedule;
