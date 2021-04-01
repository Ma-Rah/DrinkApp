function SearchBar(props) {
	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					props.setSelectedDrink(null);
					props.fetchByName();
				}}
			>
				<input
					type="text"
					onChange={(e) => props.setSearchTerm(e.target.value)}
					className="p-1 text-sm"
					placeholder="Search for a drink!"
				/>
				<input
					type="submit"
					value="🔎"
					className="py-1 px-3 bg-green-300 text-red-500 cursor-pointer text-sm"
				/>
			</form>
		</div>
	);
}

export default SearchBar;
