<script>
	import { count } from './store'

	const handleDecrement = () => count.update(oldValue => --oldValue)
	const handleIncrement = () => count.update(oldValue => ++oldValue)
</script>

<h1>Counter {$count}</h1>
<button on:click={handleDecrement}>Decrement</button>
<button on:click={handleIncrement}>Increment</button>