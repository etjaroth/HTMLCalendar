let current_date = new Date();
let calendar_date = new Date(current_date.getFullYear(), current_date.getMonth(), 1);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const rows = ["0", "1", "2", "3", "4", "5"];

console.log(calendar_date)

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

		const id = days[x] + String(y);
		console.log(real_i);
		console.log(id);
		console.log(label);
		console.log("========");
		document.getElementById(id).innerHTML = label;
	}
}
loadCalendar();
