<script>
	import Tabs from '../Tabs.svelte';
	import Tab from '../Tab.svelte';
	let active = 'books';
	// console.log(bob)
</script>

<!-- <svelte:head>
	<title>Books | JePense</title>
	<meta name="description" content="Books I've read or reading" />
</svelte:head> -->

<Tabs let:orientation={orientation}>
	<Tab name="books" label="Books" bind:active shape='pen' {orientation} />
	<Tab name="wisdom" label="Wisdom" bind:active shape='pen' {orientation} />
	<Tab name="greats" label="Greats" bind:active disabled {orientation}/>
</Tabs>

<div class="row jc my-xl">
	<div class="col-sm-11 col-md-10 col-lg-9">
		<div class="column">
			{#if active == 'books'}
				<div class="f-l my-lg text-center">
					<h3>Good Reads (read/reading)</h3>
				</div>
				<table>
					<thead>
						<tr>
							<th>Book</th>
							<th>Author</th>
							<th>Subject</th>
							<th>Date & Location</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Pilgrims Progress</td>
							<td>John Bunyan</td>
							<td>spiritual journey, Christianity, life, etc.</td>
							<td>17th century, England</td>
						</tr>
						<tr>
							<td>Walden</td>
							<td>Ralph Waldo Emerson</td>
							<td>transcendentalism</td>
							<td>19th century, the US</td>
						</tr>
						<tr>
							<td>Complete Works of William Shakespeare</td>
							<td>William Shakespeare</td>
							<td>life, love, time, etc.</td>
							<td>17th century, England</td>
						</tr>
						<tr>
							<td>Leaves of Grass</td>
							<td>Walt Whitman</td>
							<td>life, humanity, etc.</td>
							<td>19th century, the US</td>
						</tr>
						<tr>
							<td>Kelileh and Demneh</td>
							<td>Old Indian</td>
							<td>animal fables</td>
							<td>5th century, Sassanid Empire</td>
						</tr>
						<tr>
							<td>Memorial of the Saints</td>
							<td>Attar of Nishapur</td>
							<td>life of the Sufi saints</td>
							<td>12th century, Persia</td>
						</tr>
						<tr>
							<td>The Works of Attar</td>
							<td>Attar of Nishapur</td>
							<td>mysticism, life, etc.</td>
							<td>12th century, Persia</td>
						</tr>
						<tr>
							<td>Golshan-e-Raz (Garden of Secrets)</td>
							<td>Mahmoud Shabestari</td>
							<td>Sufism</td>
							<td>14th century, Persia</td>
						</tr>
						<tr>
							<td>Faust</td>
							<td>Johann Wolfgang von Goethe</td>
							<td>tragic play</td>
							<td>18th century, Germany</td>
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
			{/if}
			{#if active == 'wisdom'}
				Wisdom is valuable
			{/if}
		</div>
	</div>
</div>

<style>
	table,
	th,
	td {
		/* border: 1px solid black; */
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
</style>
