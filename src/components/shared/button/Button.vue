<template>
    <button class="button button-danger" :type="type">{{ text }}</button>
</template>

<script>
export default {
	props: ['type', 'text']
}
</script>

<style scoped>

	.button {
		display: inline-block;
		padding: .4em .8em;
		text-transform: capitalize;
    font-family: 'Karla', sans-serif;
		font-size: 1.3em;
		color: #FFF;
		border: none;
		border-radius: 4px;

	}

	.button-danger {
		background-color: #a54f4f;
	}

	.button-default {
		background-color: #29d6a2;
	}
</style>


