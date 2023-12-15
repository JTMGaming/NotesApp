<script>
	import { courses } from "$lib/store.js";
	let LocalCourses;

	courses.subscribe((value) => {
		LocalCourses = value;
		console.log("LocalCourses:", LocalCourses);
	});
</script>

<nav>
	{#if LocalCourses.length >= 1}
		<a href="./createnotes" id="link">Create notes for class</a>
	{:else}
		<p id="link">Add courses to add notes</p>
	{/if}
	<a href="./listnotes" id="link">List notes</a>
	<a href="./addcourses" id="link">Add courses</a>
</nav>

<style>
	nav {
		text-align: center;
		margin-top: 6vh;
		display: grid;
		place-items: center;
		row-gap: 2vh;
	}

	#link {
		width: 10vw;
		text-decoration: none;
		border-style: solid;
		padding: 20px;
		border-radius: 100px;
		color: black;
	}
</style>
