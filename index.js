document.addEventListener("DOMContentLoaded", function () {
	const loadButton = document.getElementById("download__button");
	const pokemonNumberInput = document.getElementById("pokemon__number");
	const pokemonImage = document.getElementById("pokemon__image");
	const pokemonNameElement = document.getElementById("pokemon__name");
	const pokemonHeightElement = document.getElementById("pokemon__height");
	const pokemonSizeElement = document.getElementById("pokemon__size");
	const baseStatsElement = document.getElementById("base__stats");

	loadButton.addEventListener("click", async () => {
		const pokemonNumber = pokemonNumberInput.value;
		if (!pokemonNumber) return;


		// Як я зрозумів, можна ще використати таку структуру
		// fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
		// .then((response) => response.json())
		// .then((data) => 	
		// але я не розібрався, як то записати правильно

		try {
			const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`);
			const data = await response.json();
			pokemonImage.src = data.sprites.front_default;
			pokemonImage.style.display = "block";

			pokemonNameElement.textContent = `Ім'я: ${data.name}`;
			pokemonHeightElement.textContent = `Зріст: ${data.height} см`;
			pokemonSizeElement.textContent = `Вага: ${data.weight * 100} грам`;

			baseStatsElement.innerHTML = "";
			data.stats.forEach((stat) => {
				const listItem = document.createElement("li");
				listItem.textContent = `${stat.stat.name}: ${stat.base_stat}`;
				baseStatsElement.appendChild(listItem);
			});
		} catch (error) {
			console.error(error);
			alert("Такого покемона, нажаль, не існує :)");
		}
	});
});