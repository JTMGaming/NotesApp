import { writable } from "svelte/store";


let parsedNotes = [];
let parsedCourses = [];

if (typeof window !== "undefined") {
    const initNotes = localStorage.getItem("notes");
    parsedNotes = initNotes ? JSON.parse(initNotes) : [];
}


export let notes = writable(parsedNotes);

if (typeof window !== "undefined") {
    const initCourses = localStorage.getItem("courses");
    parsedCourses = initCourses ? JSON.parse(initCourses) : [];
}

export let courses = writable(parsedCourses);





// function addCourse(){
//     const { subscribe, set, update} = writable([])

//     const add_course = (courseName) => {
//         update((courses) => {
//             let id = courses.length;
//             return [...courses, {id, ...courseName}]
//         });
//     };

//     return{
//         subscribe,
//         // @ts-ignore
//         add: add_course,
//         reset: () => set([]),
//         populate: (courses) => set(courses)
//     };
// }

// export const courses = addCourse();