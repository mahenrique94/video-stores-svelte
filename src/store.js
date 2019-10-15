import { writable, readable } from 'svelte/store'

const count = readable(0)

export { count }
