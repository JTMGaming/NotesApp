<script>
	// @ts-nocheck
	import { courses } from "$lib/store.js";
	let courseName = "";
	let newCourse = {};
	let LocalCourses;

	courses.subscribe((value) => {
		LocalCourses = value;
		console.log("LocalCourses:", LocalCourses);

		if (typeof window !== "undefined") {
			localStorage.setItem("courses", JSON.stringify(LocalCourses));
		}
	});

	function addCourses() {
		if (courseName.length <= 0) {
			alert("Please enter a course name");
		} else {
			newCourse = {
				id: LocalCourses.length + 1,
				name: courseName
			};
			courses.update((n) => {
				n.push(newCourse);
				return n;
			});
			console.log(newCourse);

			courseName = "";
		}
	}
</script>

<div>
	<p>Add course</p>
	<textarea
		bind:value={courseName}
		name="addcourse"
		id="addcourse"
		cols="30"
		rows="3"
		style="resize: none;"
	></textarea>

	<button on:click={addCourses} class="courses-button">Add</button>
</div>

<style>
	div {
		display: grid;
		place-items: center;
		gap: 10px;
	}

	.courses-button {
		background-color: #007bff;
		color: white;
		padding: 0.5em;
		font-size: 16px;
		border: none;
		cursor: pointer;
		width: 100px;
		border-radius: 5px;
	}
</style>
