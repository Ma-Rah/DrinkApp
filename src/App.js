import "./App.css";
import { useState, useEffect } from "react";
import DrinkDetails from "./components/DrinkDetails";
import SearchList from "./components/SearchList";
import SearchBar from "./components/SearchBar";

function App() {
	// States
	const [randomDrink, setRandomDrink] = useState(null);
	const [selectedDrink, setSelectedDrink] = useState(null);
	const [searchResults, setSearchResults] = useState(null);
	const [searchTerm, setSearchTerm] = useState(null);

	// Fetches
	async function randomData() {
		const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
		const data = await response.json();
		setRandomDrink(data.drinks[0]);
		setSearchResults(null);
		setSelectedDrink(null);
	}

	async function fetchByName() {
		const response = await fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
		);
		const data = await response.json();
		setSearchResults(data.drinks);
	}

	useEffect(() => {
		randomData();
	}, []);

	return (
		<div className="subpixel-antialiased">
			<header className="bg-gray-700 flex justify-center items-center h-16">
				<button
					onClick={randomData}
					className="shadow rounded w-12 h-12 bg-green-300 text-red-500 pointer mx-5"
				>
					<i className="fas fa-random"></i>
				</button>

				<SearchBar
					fetchByName={fetchByName}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					setSelectedDrink={setSelectedDrink}
				/>
			</header>

			<main className="min-h-screen w-full flex flex-col items-center content-start">
				{!searchResults && randomDrink
					? !selectedDrink && <DrinkDetails props={randomDrink} />
					: null}
				{searchResults && (
					<SearchList
						searchResults={searchResults}
						setSearchResults={setSearchResults}
						setSelectedDrink={setSelectedDrink}
					/>
				)}
				{selectedDrink ? (
					<DrinkDetails props={selectedDrink.drink} setSearchResults={setSearchResults} />
				) : null}
			</main>
		</div>
	);
}

export default App;
