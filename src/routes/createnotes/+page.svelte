<script>
    let precourses = []

    async function courseFecth() {
		const res = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
		const data = await res.json();
        console.log(data);
		precourses = data;

		return data;
	}


</script>




<div class="note-container">
    <h2 class="note-title">Add new notes for courses</h2>

    <div id="container">
        <p id="text">Course:</p>
        <section>
            <select name="menu" id="menu" bind:value={precourses}>
                <option disabled selected value="">Select a course</option>
                <option value="all">All courses</option>

                {#await courseFecth()}
                	<p>Loading data...</p>
                {:then precourses}
                    {#each precourses as precourse}
                        <option value={precourse.id}>{precourse.name}</option>>
                        {console.log(precourses)}
                    {/each}
                {:catch error}
                	<p>{error.message}</p>
                {/await}
            </select>
        </section>
    </div>

    <textarea name="Add notes" id="addnotes" class="note-textarea" style="resize: none;"></textarea>

    <button id="save" class="note-button">Save</button>
    <button class="note-button">Back</button>
</div>

<style>
    #container{
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        margin-bottom: 5vh;
    }

    .note-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40vw;
        margin: auto;
        padding: 2em;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .note-title{
        margin-bottom: 1em;
        color: black;
        font-size: 1.5em;
    }

    .note-label{
        margin-bottom: 0.5em;
        color: black;
    }

    .note-textarea{
        width: 100%;
        height: 200px;
        margin-bottom: 1em;
        padding: 0.5em;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .courses-button{
        background-color: #007BFF;
        color: white;
        padding: 0.5em;
        font-size: 16px;
        border: none;
        cursor: pointer;
        margin-bottom: 10px;
        width: 100px;
        border-radius: 5px;
    }

    .note-button{
        width: 100px;
        padding: 0.5em;
        margin-right: 0.5em;
        border: none;
        border-radius: 5px;
        background-color: #007BFF;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .note-button:hover{
        background-color: #0056b3;
    }
</style>