<script lang="ts">
	import Tabs from '../Tabs.svelte';
	import Tab from '../Tab.svelte';
	import type { PageServerData } from './$types';
	let active = 'books';
	export let data: PageServerData;
	// console.log(bob)
</script>

<Tabs let:orientation>
	<Tab name="books" label="Books" icon="noto:books" bind:active shape="pen" {orientation} />
	<Tab
		name="wisdom"
		label="Wisdom"
		icon="logos:treasuredata-icon"
		bind:active
		shape="pen"
		{orientation}
	/>
	<Tab name="greats" label="Greats" bind:active disabled  {orientation} />
</Tabs>

<div class="row jc">
	<div class="col-s-11 col-m-10 col-l-9">
		<div class="column">
			{#if active == 'books'}
				<div class="text-center">
					<h3>Good Reads (read/reading)</h3>
				</div>
				<div>
					<table>
						<thead>
							<tr>
								<th>Book</th>
								<th>Author</th>
								<th>Subject</th>
								<th class="optional">Date & Location</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Pilgrims Progress</td>
								<td>John Bunyan</td>
								<td>spiritual journey, Christianity, life, etc.</td>
								<td class="optional">17<sup>th</sup> century, England</td>
							</tr>
							<tr>
								<td>Walden</td>
								<td>Ralph Waldo Emerson</td>
								<td>transcendentalism</td>
								<td class="optional">19<sup>th</sup> century, the US</td>
							</tr>
							<tr>
								<td>Complete Works of William Shakespeare</td>
								<td>William Shakespeare</td>
								<td>life, love, time, etc.</td>
								<td class="optional">17<sup>th</sup> century, England</td>
							</tr>
							<tr>
								<td>Leaves of Grass</td>
								<td>Walt Whitman</td>
								<td>life, humanity, etc.</td>
								<td class="optional">19<sup>th</sup> century, the US</td>
							</tr>
							<tr>
								<td>Kelileh and Demneh</td>
								<td>Old Indian</td>
								<td>animal fables</td>
								<td class="optional">5<sup>th</sup> century, Sassanid Empire</td>
							</tr>
							<tr>
								<td>Memorial of the Saints</td>
								<td>Attar of Nishapur</td>
								<td>life of the Sufi saints</td>
								<td class="optional">12<sup>th</sup> century, Persia</td>
							</tr>
							<tr>
								<td>The Works of Attar</td>
								<td>Attar of Nishapur</td>
								<td>mysticism, life, etc.</td>
								<td class="optional">12<sup>th</sup> century, Persia</td>
							</tr>
							<tr>
								<td>Golshan-e-Raz (Garden of Secrets)</td>
								<td>Mahmoud Shabestari</td>
								<td>Sufism</td>
								<td class="optional">14<sup>th</sup> century, Persia</td>
							</tr>
							<tr>
								<td>Faust</td>
								<td>Johann Wolfgang von Goethe</td>
								<td>tragic play</td>
								<td class="optional">18<sup>th</sup> century, Germany</td>
							</tr>
							<tr>
								<td>Bustan (the Orchard)</td>
								<td>Saadi</td>
								<td>ethics, life, love, etc.</td>
							</tr>
							<tr>
								<td>Golestan (the Flower Garden)</td>
								<td>Saadi</td>
								<td>ethics, life, love, etc.</td>
							</tr>
							<tr>
								<td>Masnavi (Couplets)</td>
								<td>Mowlana (Rumi)</td>
								<td>Sufism, mysticism, etc.</td>
							</tr>
							<tr>
								<td>Divan-e-Hafez</td>
								<td>Hafez</td>
								<td>mysticism, love, life, etc.</td>
							</tr>
							<tr>
								<td>Five Treasures</td>
								<td>Nezami</td>
								<td>romances, life, spirituality, etc.</td>
							</tr>
							<tr>
								<td>Bible</td>
								<td>God</td>
								<td>God, virtue, rememberance, etc.</td>
							</tr>
							<tr>
								<td>Quran (the Reading)</td>
								<td>God</td>
								<td>God, virtue, rememberance, etc.</td>
							</tr>
						</tbody>
					</table>
				</div>
			{/if}
			{#if active == 'wisdom'}
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
	table,
	th,
	td {
		border-collapse: collapse;
	}
	th,
	td {
		padding: 5px;
		text-align: left;
	}
	table,
	tr {
		border: 1px solid black;
	}
	table tr > td:first-child {
		background-color: rgba(89, 54, 98, 0.2);
	}

	ul {
		list-style: none;
	}

	.quote {
		position: relative;
		font-size: 1.5rem;
		padding: 1rem;
		/* border-radius: 10px; */
		background-color: var(--grey2);
		margin-bottom: 1rem;
		/* min-height: 100px; */
		/* box-shadow: 1px 1px 1px rgb(0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 15%); */
		font-family: serif;
		max-width: 500px;
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
			font-size: larger;
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
			font-size: x-small;
		}

		td {
			padding: 2px;
		}
		.optional {
			display: none;
		}
	}
</style>
