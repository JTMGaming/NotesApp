<script>
    // @ts-nocheck
    import { notes } from "$lib/store.js"
    import FilterSelect from "../FilterSelect.svelte"

    let localNotes = [];
    let LocalCourses = [];
    let filteredNotes = [];

    let currentid = "all";
    

    notes.subscribe(value => {
        //console.log("Subscribed value:", value);
        localNotes = value;
        console.log("LocalNotes:", localNotes);
    });

    $: {
        filteredNotes = currentid === "all" ? localNotes : localNotes.filter(note => note.course.id === currentid);
    }
</script>

<FilterSelect />


{#if localNotes.length > 0}
    {#if filteredNotes.length > 0}
        {#each filteredNotes as note (note.id)}
            <div class="allNotes">
                <h2>{note.course.name}</h2>
                <p>{note.text}</p>
            </div>
        {/each}
    {:else}
        <div>Notes not found</div>
    {/if}
{:else}
    <div>Loading data...</div>
{/if}

<style>
    .allNotes{
        display: grid;
        border-radius: 10px;
        border-style: solid;
        margin-bottom: 10px;
    }

    .allNotes > *{
        margin-left: 1vw;
    }
</style>
