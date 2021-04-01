function SearchList(props) {
	return (
		<div className="py-1 container mx-auto w-full lg:w-3/4 2xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
			{props.searchResults.map((drink, key) => {
				return (
					<div
						key={key}
						className="drink__card h-50 bg-indigo-50 p-3 m-1 flex flex-row justify-between items-center
					text-center leading-loose cursor-pointer"
						onClick={() => {
							props.setSelectedDrink({ drink });
							props.setSearchResults(null);
						}}
					>
						<h2 className="text-lg sm:text-xl text-red-500 p-1">{drink.strDrink}</h2>
						<img
							src={drink.strDrinkThumb && drink.strDrinkThumb}
							alt={drink.strDrink}
							className="shadow rounded w-14 md:w-20 h-14 md:h-20"
						/>
					</div>
				);
			})}
		</div>
	);
}

export default SearchList;
