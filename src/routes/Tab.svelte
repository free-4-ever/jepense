<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string;
	export let label: string;
	export let orientation: string = 'horizontal'
	// export let def = false;
	export let disabled = false;
	export let active: String;
	export let shape: 'round' | 'pen' = 'round';
	export let icon: string | undefined = undefined;
</script>

<li
	class="row je"
	class:active={active == name}
	class:round={shape == 'round' || orientation == 'vertical'}
	class:pen={shape == 'pen' && orientation == 'horizontal'}
	style="background-color: {active == name ? 'var(--green)' : 'var(--grey3)'};"
>
	<button on:click={() => (active = name)} {disabled}>
		{#if icon}
			<Icon {icon} width="1rem" height="1rem" />
		{/if}
		{label}
	</button>
</li>

<style lang="postcss">
	li {
		position: relative;
		/* padding: 0.7rem 0; */
		width: min-content;
		border: 1px solid;
		/* background-color: var(--grey3); */
		margin-bottom: 5px;
		transition: width 0.3s;
		text-align: left;

		& button {
			transition: all 0.3s;
			width: 140px;
			/* min-width: 120px; */
			border: none;
			/* margin-right: 1rem; */
			/* cursor: pointer; */
			padding: 0.7rem 0 0.7rem 1.2rem;
			border-radius: 25px;
			background-color: unset;
			margin-left: 1.5rem;

			/* &:not(button[disabled]):hover {
				color: var(--first);
				width: 150px;
			} */
		}
	}
	li:not(.active) button:not(button[disabled]):hover {
		color: var(--first);
		width: 150px;
	}

	.round {
		border-radius: 25px;
	}
	.pen {
		&::after {
			--size: 12px;
			content: '▶';
			position: absolute;
			right: -37px;
			top: -2px;
			width: min-content;
			height: min-content;
			/* background-color: red; */
			border: var(--size) solid transparent;
			border-left: var(--size) solid var(--color-text);
			transition: 800ms;
		}
	}
	button:not(button[disabled]) {
		cursor: pointer;
	}

	button[disabled] {
		cursor: not-allowed;
		opacity: 0.3;
	}
</style>
