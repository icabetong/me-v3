import { writable } from 'svelte/store'

const theme = writable<boolean>(false)
export default theme
