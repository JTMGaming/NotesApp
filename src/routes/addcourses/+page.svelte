<script>
    import { courses } from '$lib/store.js';
    let courseName = "";

    


    function addNotes(){
        if(courseName.length <= 0){
            alert("Please enter a course name");
        }
        else{
            courses.add(courseName);
            courseName = "";
        }
        
    }

</script>

<div>
    <p>Add course</p>
    <textarea bind:value={courseName} name="addcourse" id="addcourse" cols="30" rows="3" style="resize: none;"></textarea>

    <button on:click={addNotes} class="courses-button">Add</button>
</div>



<style>

    div{
        display: grid;
        place-items: center;
        gap: 10px;
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
}

</style>