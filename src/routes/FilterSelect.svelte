<script>
	//@ts-nocheck
	import { courses, currentid, currentCourseName } from "$lib/store.js";
	let localCurrentId = "all";
	let LocalCourses = [];

	courses.subscribe((value) => {
		// console.log("Subscribed value:", value);
		LocalCourses = value;
		console.log("LocalCourses:", LocalCourses);
	});

	currentid.subscribe((value) => {
		localCurrentId = value;
	});

	$: {
		currentid.set(localCurrentId);

		if (Array.isArray(LocalCourses) && LocalCourses.length > 0) {
			let selectedCourse = LocalCourses.find((course) => course.id === localCurrentId);

			if (selectedCourse) {
				currentCourseName.set(selectedCourse.name);
			}
		}
	}
</script>

<div id="container">
	<p id="text">Course:</p>
	<section>
		<select name="menu" id="menu" bind:value={localCurrentId}>
			<option disabled selected value="">Select a course</option>
			<option value="all">All courses</option>
			{#if LocalCourses.length > 0}
				{#each LocalCourses as result}
					<option value={result.id}>{result.name}</option>
				{/each}
			{:else}
				<option disabled selected value="">Loading courses...</option>
			{/if}
		</select>
	</section>
</div>

<style>
	#container {
		display: grid;
		grid-template-columns: auto auto;
		align-items: center;
		margin-bottom: 5vh;
	}

	#text {
		text-align: right;
	}

	#menu {
		background-color: rgb(0, 0, 0);
		color: white;
		padding: 0.5em;
		font-size: 16px;
		border: none;
		cursor: pointer;
		width: 150px;
		border-radius: 5px;
		margin-left: 10px;
	}
</style>
