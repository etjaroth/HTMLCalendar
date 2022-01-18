let current_date = new Date();
let calendar_date = new Date();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ""];
const rows = ["0", "1", "2", "3"];

function loadCalendar() {
	for (let day in days) {
		for (let r in rows) {
			let id = day + r;
			console.log(id);
			console.log("sdfghj");
			//document.getElementById(id).innerHTML = "X";
		}
	}
}

