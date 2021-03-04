import React from "react";

function RandomDrink(props) {
	return (
		<div className="py-1w-full">
			{" "}
			{props.randomDrink.map((result, index) => (
				<div
					key={index}
					onClick={() => props.setSelectedDrink(index)}
					className="drink__card h-50 bg-indigo-50 p-2 m-1 flex flex-col justify-around items-center
					text-center leading-loose	"
				>
					<h1 className="text-3xl sm:text-2xl md:text-4xl text-red-500 py-3">{result.strDrink}</h1>
					<img
						src={result.strDrinkThumb && result.strDrinkThumb}
						alt={result.strDrink}
						className="shadow rounded"
					/>

					<div>
						<div className="text-md md:text-xl py-2">
							<h2>{result.strGlass}</h2>
							<br />
							<p>
								{result.strIngredient1} {result.strMeasure1}
							</p>
							<p>
								{result.strIngredient2} {result.strMeasure2}
							</p>
							<p>
								{result.strIngredient3} {result.strMeasure3}
							</p>
						</div>
						<div className="bg-white p-2 shadow">
							<p className="p-2 text-red-600 text-sm sm:text-lg md:text-xl ">
								{result.strInstructions}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default RandomDrink;
