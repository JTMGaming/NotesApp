<script>
    // @ts-nocheck
    import { notes } from "$lib/store.js"
    import { courses } from "$lib/store.js";

    let localNotes = [];
    let LocalCourses = [];
    let filteredNotes = [];

    let currentid = "all";
    

    notes.subscribe(value => {
        //console.log("Subscribed value:", value);
        localNotes = value;
        console.log("LocalNotes:", localNotes);
    });

    courses.subscribe(value => {
        // console.log("Subscribed value:", value);
        LocalCourses = value;
        // console.log("LocalCourses:", LocalCourses);
    })

    $: {
        filteredNotes = currentid === "all" ? localNotes : localNotes.filter(note => note.course.id === currentid);
    }
</script>




<div id="container">
    <p id="text">Course:</p>
    <section>
        <select name="menu" id="menu" bind:value={currentid}>
            <option disabled selected value="">Select a course</option>
            <option value="all">All courses</option>
            {#if LocalCourses.length > 0}
                {#each LocalCourses as result}
                    <option value={result.id}>{result.name}</option>
                    {console.log(currentid)}
                    {console.log(filteredNotes)}
                {/each}
            {:else}
                <option disabled selected value="">Loading courses...</option>
            {/if}
        </select>
    </section>
</div>


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
    #container{
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        margin-bottom: 5vh;
    }

    /* .courses-button{
        background-color: #007BFF;
        color: white;
        padding: 0.5em;
        font-size: 16px;
        border: none;
        cursor: pointer;
        width: 100px;
        border-radius: 5px;
        margin-left: 10px;
    } */

    #text{
        text-align: right;
    }

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
