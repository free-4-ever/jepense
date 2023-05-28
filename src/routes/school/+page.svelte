<script lang="ts">
	import Tabs from '../Tabs.svelte';
	import Tab from '../Tab.svelte';
	import type { PageServerData } from './$types';
	let active = 'books';
	export let data: PageServerData;
</script>

<Tabs let:orientation>
	<Tab name="books" label="Books" icon="ph:books-duotone" bind:active shape="pen" {orientation} />
	<Tab
		name="quotes"
		label="Quotes"
		icon="game-icons:open-treasure-chest"
		shape="pen"
		bind:active
		{orientation}
	/>
	<Tab
		name="selections"
		label="Selections"
		icon="oi:excerpt"
		shape="pen"
		bind:active
		{orientation}
	/>
	<Tab
		name="greats"
		label="Greats"
		icon="material-symbols:stars"
		bind:active
		disabled
		{orientation}
	/>
</Tabs>

<div class="row jc">
	<div class="col-s-11 col-m-10 col-l-9">
		<div class="column">
			{#if active == 'books'}
				<div class="text-center">
					<h3>Good Reads</h3>
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th>Book</th>
								<th>Author</th>
								<th>Theme(s)</th>
								<th class="optional">Date & Location</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Bible</td>
								<td>Various</td>
								<td>God, Virtue, Rememberance, Etc.</td>
								<td class="optional">Over Centuries</td>
							</tr>
							<tr>
								<td>Bustan (the Orchard)</td>
								<td>Saadi</td>
								<td>Ethics, Life, Etc.</td>
								<td class="optional">13<sup>th</sup> Century, Persia</td>
							</tr>
							<tr>
								<td>Complete Works of William Shakespeare</td>
								<td>William Shakespeare</td>
								<td>Life, Love, Wisdom, Etc.</td>
								<td class="optional">16-17<sup>th</sup> Century, England</td>
							</tr>
							<tr>
								<td>Divan of Hafez</td>
								<td>Hafez</td>
								<td>Mysticism, Love, Life, Etc.</td>
								<td class="optional">14<sup>th</sup> Century, Persia</td>
							</tr>
							<tr>
								<td>Faust</td>
								<td>Johann Wolfgang von Goethe</td>
								<td>Damnation vs. Salvation</td>
								<td class="optional">18<sup>th</sup> Century, Germany</td>
							</tr>
							<tr>
								<td>Five Treasures</td>
								<td>Nezami</td>
								<td>Romances, Wisdom, Epics</td>
								<td class="optional">12-13<sup>th</sup> Century, Persia</td>
							</tr>
							<tr>
								<td>Golestan (the Flower Garden)</td>
								<td>Saadi</td>
								<td>Ethics, Life, Love, Etc.</td>
								<td class="optional">13<sup>th</sup> Century, Persia</td>
							</tr>
							<tr>
								<td>Golshan-e-Raz (Garden of Secrets)</td>
								<td>Mahmoud Shabestari</td>
								<td>Mysticism, Sufism</td>
								<td class="optional">14<sup>th</sup> Century, Persia</td>
							</tr>
							<tr>
								<td>Kelileh and Demneh (Pancha Tantra)</td>
								<td>Old Indian</td>
								<td>Animal Fables</td>
								<td class="optional">6<sup>th</sup> Century, Sassanid Empire (Translated)</td>
							</tr>
							<tr>
								<td>Leaves of Grass</td>
								<td>Walt Whitman</td>
								<td>Life, Humanity, Etc.</td>
								<td class="optional">1855, US</td>
							</tr>
							<tr>
								<td>Masnavi (Couplets)</td>
								<td>Mowlana (Rumi)</td>
								<td>Mysticism, Sufism, Love, Etc.</td>
								<td class="optional">18<sup>th</sup> Century, Persia</td>
							</tr>
							<tr>
								<td>Memorial of the Saints</td>
								<td>Attar of Nishapur</td>
								<td>Hagiography of Sufi Saints</td>
								<td class="optional">12-13<sup>th</sup> Century, Persia</td>
							</tr>
							<tr>
								<td>Quran (Reading)</td>
								<td>God</td>
								<td>God, Virtue, Rememberance, Etc.</td>
								<td class="optional">7<sup>th</sup> Century, Arabia</td>
							</tr>
							<tr>
								<td>The Pilgrim's Progress</td>
								<td>John Bunyan</td>
								<td>Spiritual Journey, Christianity, Etc.</td>
								<td class="optional">1678, England</td>
							</tr>
							<tr>
								<td>Walden</td>
								<td>Henry David Thoreau</td>
								<td>Transcendentalism</td>
								<td class="optional">1854, US</td>
							</tr>
							<tr>
								<td>Works of Attar</td>
								<td>Attar of Nishapur</td>
								<td>Mysticism, Love, Etc.</td>
								<td class="optional">12-13<sup>th</sup> Century, Persia</td>
							</tr>
						</tbody>
					</table>
				</div>
			{/if}
			{#if active == 'quotes'}
				<ul class="quotes">
					{#each data.quotes as q, i}
						<li class="quote slide-left" style="animation-delay: {i * 3 + 0.5}s">
							<div>
								{q.body}
							</div>
							<div class="quotee">
								{q.great.name}
							</div>
							<svg viewBox="0 0 3 3" aria-hidden="true">
								<path
									d="M 0 1.9 C .5 2.5, 2.5 3, 3 3 L0,3 Z"
									fill="var(--grey2)"
									stroke="grey"
									stroke-width="0"
								/>
							</svg>
						</li>
					{/each}
				</ul>
			{/if}

			{#if active == 'selections'}
				<ul class="quotes">
					{#each data.selections as s, i}
						<li class="quote slide-left" style="animation-delay: {i * 5 + 0.5}s">
							<div bind:innerHTML={s.body} contenteditable="false">
								{s.body}
							</div>
							<div class="book">
								{s.book.title}
							</div>
							<svg viewBox="0 0 3 3" aria-hidden="true">
								<path
									d="M 0 1.9 C .5 2.5, 2.5 3, 3 3 L0,3 Z"
									fill="var(--grey2)"
									stroke="grey"
									stroke-width="0"
								/>
							</svg>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
	svg {
		position: absolute;
		left: 100%;
		bottom: 0;
		width: 2.5em;
		height: 3em;
		display: inline-block;
	}

	/* table {
		text-transform: capitalize;
	} */
	table {
		border-collapse: collapse;
		border-radius: 5px;
		border: 2px solid var(--first);
		/* background-color: var(--emplGS); */
		/* color: var(--emplDS); */
	}
	th,
	td {
		padding: 8px;
		text-align: left;
		border: 1px solid;
		border-collapse: collapse;
		/* border-radius: 8px; */
	}
	tr {
	}

	tr:hover {
		background-color: var(--brown2);
	}
	table tr > td:first-child {
		background-color: rgba(135, 77, 117, 0.2);
		/* rgba(89, 54, 98, 0.2); */
	}

	.quotes {
		list-style: none;
		overflow-x: hidden;
	}

	.quote {
		position: relative;
		font-size: larger;
		padding: 1rem;
		/* border-radius: 10px; */
		background-color: var(--grey2);
		margin-bottom: 1rem;
		/* min-height: 100px; */
		/* box-shadow: 1px 1px 1px rgb(0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 15%); */
		font-family: serif;
		max-width: 600px;
		border-radius: 5px;
	}

	.quotee {
		position: absolute;
		left: 115%;
		bottom: 10%;
		font-size: smaller;
		float: right;
		min-width: 200px;
	}

	.book {
		position: absolute;
		left: 115%;
		bottom: 5%;
		font-size: smaller;
		float: right;
		min-width: 200px;
	}

	.slide-left {
		/* animation: slide-left 1s ease delay iteration-count direction fill-mode; */
		animation-name: slide-left;
		animation-timing-function: ease;
		animation-fill-mode: forwards;
		animation-duration: 1s;
		opacity: 0;
		transition: transfrom 1s;
	}

	@keyframes slide-left {
		from {
			transform: translateX(40px);
			opacity: 1;
		}

		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@media only screen and (max-width: 992px) {
		svg {
			display: none;
		}

		ul.quotes {
			padding: 0;
		}

		.quote {
			padding: 0.5rem;
			font-size: unset;
			margin-bottom: 2.5rem;
			min-height: 40px;
		}

		.quotee {
			min-width: unset;
			/* text-align: right; */
			/* position: static; */
			/* left: 90%; */
			top: 116%;
			right: 0;
			left: unset;
		}

		.book {
			min-width: unset;
			top: 110%;
			right: 0;
			left: unset;
		}

		.quote::after {
			content: '';
			position: absolute;
			border-width: 8px;
			border: 20px solid transparent;
			right: 0;
			top: 100%;
			border-top-color: var(--grey2);
			margin-top: -10px;
		}

		table {
			overflow: scroll;
			font-size: smaller;
		}

		td {
			padding: 3px;
		}
		.optional {
			display: none;
		}
	}
</style>
