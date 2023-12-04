<script>
    // @ts-nocheck
    import FilterSelect from "../FilterSelect.svelte"
    let noteCourses = [];

    let text = "";

    function moreNotes(){
        console.log(text);
    }

</script>




<div class="note-container">
    <h2 class="note-title">Add new notes for courses</h2>

    <FilterSelect />

    <textarea bind:value={text} name="Add notes" id="addnotes" class="note-textarea" style="resize: none;"></textarea>

    <button on:click={moreNotes} id="save" class="note-button">Save</button>
    <button class="note-button">Back</button>
</div>

<style>
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

    /* .note-label{
        margin-bottom: 0.5em;
        color: black;
    } */

    .note-textarea{
        width: 100%;
        height: 200px;
        margin-bottom: 1em;
        padding: 0.5em;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    /* .courses-button{
        background-color: #007BFF;
        color: white;
        padding: 0.5em;
        font-size: 16px;
        border: none;
        cursor: pointer;
        margin-bottom: 10px;
        width: 100px;
        border-radius: 5px;
    } */

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