// @ts-nocheck
import { notes, courses } from "$lib/store.js";

if (typeof window !== "undefined") {
	const storedNotes = localStorage.getItem("notes");
	const storedCourses = localStorage.getItem("courses");
	let LocalNotes;

	notes.subscribe((value) => {
		//console.log("Subscribed value:", value);
		LocalNotes = value;
		console.log("LocalNotes:", LocalNotes);
	});

	if (!storedNotes) {
		fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes")
			.then((response) => response.json())
			.then((data) => {
				notes.set(data);
				localStorage.setItem("notes", JSON.stringify(data));
			})
			.catch((error) => console.error("Error:", error));
	}

	if (!storedCourses) {
		fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
			.then((response) => response.json())
			.then((data) => {
				courses.set(data);
				localStorage.setItem("courses", JSON.stringify(data));
			})
			.catch((error) => console.error("Error:", error));
	}
}
