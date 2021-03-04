import "./App.css";
import RandomDrink from "./components/RandomDrink";
import { useState, useEffect } from "react";

function App() {
	const [randomDrink, setRandomDrink] = useState([]);

	async function randomData() {
		const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
		const data = await response.json();
		setRandomDrink(data.drinks);
	}

	function handleRandom() {
		randomData();
	}

	useEffect(() => {
		randomData();
	}, []);

	return (
		<div className="App">
			<header className="bg-gray-700 flex flex-col justify-center items-center h-16">
				<button
					onClick={handleRandom}
					className="shadow rounded w-12 h-12 bg-green-300 text-red-500 pointer"
				>
					<i class="fas fa-random"></i>
				</button>
			</header>

			<main className="min-h-screen w-full flex flex-col items-center content-start p-3">
				<div className="">
					<RandomDrink randomDrink={randomDrink} />
				</div>
			</main>
		</div>
	);
}

export default App;
