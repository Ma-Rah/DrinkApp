import "./App.css";
import { useState, useEffect } from "react";
import DrinkDetails from "./components/DrinkDetails";
import SearchList from "./components/SearchList";
import SearchBar from "./components/SearchBar";
import { FaRandom } from "react-icons/fa";

function App() {
  // States
  const [randomDrink, setRandomDrink] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [searchMessage, setSearchMessage] = useState(false);

  // Fetches
  async function randomData() {
    setSearchMessage(false);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const data = await response.json();
    setRandomDrink(data.drinks[0]);
    setSearchResults(null);
    setSelectedDrink(null);
  }

  async function fetchByName() {
    setSearchMessage(false);
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    setSearchResults(data.drinks);

    if (!data.drinks) {
      setSearchMessage(true);
    }
  }

  useEffect(() => {
    randomData();
  }, []);

  return (
    <div className="subpixel-antialiased">
      <header className="bg-gray-700 flex justify-center items-center h-16">
        <button
          className="rounded w-12 h-12 bg-green-300 text-red-500 cursor-pointer mx-5 flex	justify-center items-center"
          onClick={randomData}
        >
          <FaRandom />
        </button>

        <SearchBar
          fetchByName={fetchByName}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setSelectedDrink={setSelectedDrink}
        />
      </header>

      <main className="min-h-screen w-full flex flex-col items-center content-start">
        {searchMessage && (
          <span className="bg-indigo-50 p-2 my-2 text-red-500 text-sm md:text-lg xl:text-xl rounded">
            No results found, but here's a random drink!
          </span>
        )}
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
          <DrinkDetails
            props={selectedDrink.drink}
            setSearchResults={setSearchResults}
          />
        ) : null}
      </main>
    </div>
  );
}

export default App;
