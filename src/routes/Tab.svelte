<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string;
	export let label: string;
	export let orientation: string = 'horizontal';
	// export let def = false;
	export let disabled = false;
	export let active: String;
	export let shape: 'round' | 'pen' | 'square' = 'round';
	export let icon: string | undefined = undefined;
</script>

<li
	class="row je"
	class:disabled
	class:wi={icon}
	class:woi={!icon}
	class:active={active == name}
	class:round={shape == 'round' && !(orientation == 'vertical')}
	class:pen={shape == 'pen' && orientation == 'horizontal'}
>
	<button on:click={() => (active = name)} {disabled}>
		{#if icon}
			<div class="icon">
				<Icon {icon} width="1rem" height="1rem" />
			</div>
		{/if}
		<div class="label" class:label-solo={!icon} class:label-co={icon}>
			{label}
		</div>
	</button>
</li>

<style lang="postcss">
	li {
		box-shadow: 1px 1px 1px rgb(0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 15%);
		position: relative;
		/* padding: 0.7rem 0; */
		/* width: min-content; */
		border: 1px solid;
		margin-bottom: 5px;
		transition: width 0.3s;
		text-align: left;

		&.disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}

		& button {
			position: relative;
			transition: all 0.3s;
			/* min-width: 120px; */
			border: none;
			/* margin-right: 1rem; */
			/* cursor: pointer; */
			padding: 0.7rem 0.7rem 0.7rem 1.2rem;
			border-radius: 25px;
			background-color: unset;
			margin-left: 1.5rem;
			text-align: left;
			/* &:not(button[disabled]):hover {
				color: var(--first);
				width: 150px;
			} */
		}

		/* & .active {
			background-color: aqua;
		} */

		&:not(.active) {
			background-color: var(--grey3);
		}

		/* & button.wi {
			width: 140px;
		}

		& button.woi {
			width: 124px;
		} */
	}

	li.active {
		/* color: white; */
		background-color: var(--first);

		button {
			color: var(--emplGS);
		}
	}

	li:not(.active) button:not(button[disabled]):hover {
		color: var(--green);
	}

	div.icon {
		min-width: 20px;
		display: inline-block;
		position: absolute;
		left: 2.5rem;
	}

	div.label {
		min-width: 60px;

		&.label-solo {
			margin-left: 2rem;
			/* text-align: center; */
		}

		&.label-co {
			margin-left: 3rem;
		}
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

	/* button[disabled] {
		cursor: not-allowed;
		opacity: 0.3;
	} */
	li.disabled button {
		cursor: not-allowed;
	}

	@media only screen and (min-width: 992px) {
		li {
			&.wi {
				width: 165px;
			}

			&.woi {
				width: 155px;
			}

			&.wi:not(.active):not(.disabled):hover {
				width: 180px;
			}

			&.woi:not(.active):not(.disabled):hover {
				width: 170px;
			}
		}
	}
	@media only screen and (max-width: 992px) {
		
		li {
			width: 100%;
			border-radius: 5px;

			& button {
				width: 100%;
				margin: 0;
				padding: 0.5rem 0;
			}
		}

		div.icon {
			min-width: 20px;
			display: inline-block;
			position: absolute;
			left: 1rem;
		}

		div.label {
			&.label-solo {
				text-align: center;
				margin: unset;
			}

			&.label-co {
				margin: unset;
				text-align: center;
			}
		}
	}
</style>
