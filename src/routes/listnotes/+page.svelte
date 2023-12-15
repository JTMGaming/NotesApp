<script>
	// @ts-nocheck
	import { notes, currentid } from "$lib/store.js";
	import FilterSelect from "../FilterSelect.svelte";

	let localNotes = [];
	let LocalCourses = [];
	let filteredNotes = [];

	let LocalCurrentId;

	currentid.subscribe((value) => {
		LocalCurrentId = value;
	});

	notes.subscribe((value) => {
		//console.log("Subscribed value:", value);
		localNotes = value;
		console.log("LocalNotes:", localNotes);
	});

	function removeLine(id) {
		localNotes = localNotes.filter((note) => note.id !== id);
		notes.set(localNotes);
		localStorage.setItem("notes", JSON.stringify(localNotes));
	}

	$: {
		filteredNotes =
			LocalCurrentId === "all"
				? localNotes
				: localNotes.filter((note) => note.course && note.course.id === LocalCurrentId);
	}
</script>

<FilterSelect />

{#if localNotes.length > 0}
	{#if filteredNotes.length > 0}
		{#each filteredNotes as note (note.id)}
			<div class="allNotes">
				{#if note.course}
					<h2>{note.course.name}</h2>
					<p>{note.text}</p>
					<p>{note.timestamp}</p>
					<button on:click={() => removeLine(note.id)}>X</button>
				{/if}
			</div>
		{/each}
	{:else}
		<div>Notes not found</div>
	{/if}
{:else}
	<div>Notes not found</div>
{/if}

<style>
	.allNotes {
		display: grid;
		border-radius: 10px;
		border-style: solid;
		margin-bottom: 10px;
		grid-template-columns: 100fr 1fr;
	}

	.allNotes p,
	h2 {
		margin-left: 1vw;
		grid-column: 1;
	}

	button {
		grid-row: 1 / span 1;
		grid-column: 2;
		width: 40px;
		height: 40px;
		border-radius: 100px;
		background-color: red;
		color: whitesmoke;
	}
</style>
