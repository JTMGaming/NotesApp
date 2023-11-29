<script>
    let notes = [];

    async function getNotes() {
		const res = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");
		const data = await res.json();
        console.log(data);
		notes = data;

		return data;
	}
</script>




<div id="container">
    <p id="text">Course:</p>
    <button class="courses-button"></button>
</div>


{#await getNotes()}
	<p>Loading data...</p>
{:then notes}
{#each notes as note (note.id)}
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
        place-items: center;
    }
</style>
