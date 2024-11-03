import React, {useState} from "react";
import Nav from "./Nav";
import HogTile from "./HogTile/HogTile";
import AddHogForm from "./AddHogForm/AddHogForm";

import hogsData from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false);
	const [sortBy, setSortBy] = useState("name");
	const [sortOrder, setSortOrder] = useState("asc");
	const [hiddenHogs, setHiddenHogs] = useState([]);
	const [hogs, setHogs] = useState(hogsData);

	const toggleGreasedFilter = () => {
		setShowGreased(!showGreased);
	};

	const hideHogs = (hogName) => {
		setHiddenHogs([...hiddenHogs, hogName]);
	};

	const addHog = (newHog) => {
		setHogs([...hogs, newHog]);
	}

	const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;

	const sortedHogs = filteredHogs
	.filter(hog => !hiddenHogs.includes(hog.name))
	.sort((a, b) => {
		if (sortBy === "name") {
			return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
		}else {
			return sortOrder === "asc" ? a.weight - b.weight : b.weight - a.weight;
		}
	});

	return (
		<div className="App">
			<Nav />
			<AddHogForm addHog={addHog} />
			<button onClick={toggleGreasedFilter}>
				{showGreased ? "Show All Hogs" : "Show Greased Hogs"}
			</button>

			<div>
				<label>Sort By:</label>
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="name">Name</option>
					<option value="weight">Weight</option>
				</select>

				<label>Order:</label>
				<select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>

			<div className="ui grid container">
				{sortedHogs.map(hog => (
					<div className="ui eight wide column" key={hog.name}>
					<HogTile  hog={hog} onHide={hideHogs} />
					</div>
				))}
			</div>
		</div>
	);
}
 
export default App;
