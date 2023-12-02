<script>
    // @ts-ignore
    let notes = [];
    let results = [];
    let currentid = "all";

    async function getNotes() {
		const res = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
		const data = await res.json();
        console.log(data);
		notes = data;

		return data;
	}
    // @ts-ignore

    function getFilter(){
        results = notes.filter(
            (thing, index, self) =>
                index ===
                self.findIndex((t) => t.course.id === thing.course.id)
        );
    }

    
    
</script>




<div id="container">
    <p id="text">Course:</p>
    <section>
        <select name="menu" id="menu" bind:value={currentid}>
            <option disabled selected value="">Select a course</option>
            <option value="all">All courses</option>

            {#await getNotes()}
            	<p>Loading data...</p>
            {:then notes}
                {getFilter()}
                {#each results as result}
                    <option value={result.course.id}>{result.course.name}</option>>
                    {console.log(currentid)}
                {/each}
            {:catch error}
            	<p>{error.message}</p>
            {/await}
        </select>
    </section>
</div>


{#await getNotes()}
	<p>Loading data...</p>
{:then notes}
    {#each (currentid === 'all' ? notes : notes.filter(note => note.course.id === currentid)) as note (note.id)}
        <div class="allNotes">
            <h2>{note.course.name}</h2>
            <p>{note.text}</p>
        </div>
    {/each}
{:catch error}
	<p>{error.message}</p>
{/await}


<style>
    #container{
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        margin-bottom: 5vh;
    }

    .courses-button{
        background-color: #007BFF;
        color: white;
        padding: 0.5em;
        font-size: 16px;
        border: none;
        cursor: pointer;
        width: 100px;
        border-radius: 5px;
        margin-left: 10px;
    }

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
