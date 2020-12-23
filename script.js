const bg = document.querySelector(".bg");
const text = document.querySelector(".loading-screen");

let count = 0;

let interval = setInterval(doBlur, 50);

function doBlur() {
	count++;

	if (count > 99) {
		clearInterval(interval);
	}

	text.textContent = count + "%";
	text.style.opacity = scale(count, 0, 100, 1, 0);
	// console.log("text: " + text.style.opacity);
	bg.style.filter = `blur(${scale(count, 0, 100, 10, 0)}px)`;
	// console.log("bg: " + bg.style.filter);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
	return (
		((num - in_min) * (out_max - out_min)) / (in_max - in_min) +
		out_min
	);
};
