<script>
    //@ts-nocheck
    import { courses } from "$lib/store.js";
    let currentid = "all";
    let LocalCourses = [];

    courses.subscribe(value => {
        // console.log("Subscribed value:", value);
        LocalCourses = value;
        // console.log("LocalCourses:", LocalCourses);
    })

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
                {/each}
            {:else}
                <option disabled selected value="">Loading courses...</option>
            {/if}
        </select>
    </section>
</div>

<style>
    #container{
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        margin-bottom: 5vh;
    }

    #text{
        text-align: right;
    }

    #menu{
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