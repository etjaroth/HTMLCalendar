let current_date = new Date();
let calendar_date = new Date(current_date.getFullYear(), current_date.getMonth(), 1);

function getDayCoord(i) {
	const real_i = i + calendar_date.getDay() - 1; // + 1 for 0 -> 1
	const x = real_i % 7;
	const y = Math.floor(real_i / 7);

	return [x, y];
}

function getID(x, y) {
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[x] + String(y);
}

function loadCalendar() {
	let i = 0;
	const lastDayInMonth = new Date(calendar_date.getFullYear(), calendar_date.getMonth() + 1, 0);
	for (let i = 0; i < 42; ++i) { // 42 = 7 days * 6 rows
		const real_i = i - calendar_date.getDay() + 1; // + 1 for 0 -> 1
		const x = i % 7;
		const y = Math.floor(i / 7);

		let label = "";
		if ((1 <= real_i) && (real_i <= lastDayInMonth.getDate())) {
			label = String(real_i);
		}

		document.getElementById(getID(x, y)).innerHTML = label;
	}
}

function highlightDate(date) {
	if (date.getMonth() != calendar_date.getMonth()) {
		return;
	}

	const coord = getDayCoord(date.getDate());
	const x = coord[0];
	const y = coord[1];
	document.getElementById(getID(x, y)).style.backgroundColor = "yellow";
}

loadCalendar();
highlightDate(current_date);
