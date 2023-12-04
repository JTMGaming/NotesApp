import { writable } from 'svelte/store';


function addCourse(){
    const { subscribe, set, update} = writable([])

    const add_course = (courseName) => {
        update((courses) => {
            let id = courses.length;
            return [...courses, {id, ...courseName}]
        });
    };

    return{
        subscribe,
        // @ts-ignore
        add: add_course,
        reset: () => set([]),
        populate: (courses) => set(courses)
    };
}

export const courses = addCourse();