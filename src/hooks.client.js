import { notes } from "$lib/store.js"
import { courses } from "$lib/store.js";


fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes")
    .then(response => {
        // console.log("Fetched notes response ", response)
        return response.json()
    })
    .then(data => {
        // console.log('Fetched notes data:', data);
        notes.set(data);
        localStorage.setItem("notes", JSON.stringify(notes));
    })
    .catch(error => console.error("Error:", error));



fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses")
    .then(response => {
        return response.json()}
        )
    .then(data => {
        // console.log('Fetched courses data:', data);
        courses.set(data);
        localStorage.setItem("courses", JSON.stringify(courses));
    })
    .catch(error => console.error("Error:", error));