import { writable } from 'svelte/store';

// Create a writable store with initial value
export const store = writable([])

// Subscribe to changes
store.subscribe(value => {
    store
    //console.log(value);
});
