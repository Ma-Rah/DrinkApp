function DrinkDetails(props) {
	// Destructure props
	const {
		strDrink: name,
		strDrinkThumb: image,
		strGlass: glass,
		strIngredient1: ingredient1,
		strIngredient2: ingredient2,
		strIngredient3: ingredient3,
		strIngredient4: ingredient4,
		strIngredient5: ingredient5,
		strIngredient6: ingredient6,
		strMeasure1: measure1,
		strMeasure2: measure2,
		strMeasure3: measure3,
		strMeasure4: measure4,
		strMeasure5: measure5,
		strMeasure6: measure6,
		strInstructions: instructions,
	} = props.props;

	return (
		<div className="w-full flex justify-center">
			<div className=" mx-auto container lg:mx-48 xl:mx-60 2xl:mx-96 bg-indigo-50 ">
				<div
					className=" p-2 my-1 flex flex-col justify-around items-center
					text-center leading-loose w-full"
				>
					<h1 className="text-xl sm:text-2xl md:text-4xl text-red-500 py-2">{name}</h1>
					<img src={image && image} alt={name} className="shadow rounded w-32 h-32" />

					<div>
						<div className="text-md md:text-xl ">
							<h2 className="py-1 text-blue-500">{glass}</h2>

							<div>
								<span className="text-gray-900 px-1"> {ingredient1}</span>
								<span className="text-red-400">{measure1}</span>
							</div>
							{ingredient2 && (
								<div>
									<span className="text-gray-900 px-1"> {ingredient2}</span>
									<span className="text-red-400">{measure2}</span>
								</div>
							)}

							{ingredient3 && (
								<div>
									<span className="text-gray-900 px-1"> {ingredient3}</span>
									<span className="text-red-400">{measure3}</span>
								</div>
							)}
							{ingredient4 && (
								<div>
									<span className="text-gray-900 px-1"> {ingredient4}</span>
									<span className="text-red-400">{measure4}</span>
								</div>
							)}

							{ingredient5 && (
								<div>
									<span className="text-gray-900 px-1"> {ingredient5}</span>
									<span className="text-red-400">{measure5}</span>
								</div>
							)}

							{ingredient6 && (
								<div>
									<span className="text-gray-900 px-1"> {ingredient6}</span>
									<span className="text-red-400">{measure6}</span>
								</div>
							)}
						</div>
						<div className="bg-white p-2 mx-2 shadow flex justify-center">
							<p className="p-2 text-red-600 text-sm md:text-lg w-full md:w-3/4">
								{instructions ? instructions : "Enjoy!"}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DrinkDetails;
