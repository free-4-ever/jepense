<script>
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Contact | JePense</title>
	<meta name="description" content="Contact me by filling the following form." />
</svelte:head>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in       response to a form submission. it will vanish if the user reloads -->
	<p class="success">Message received. Thanks for getting in touch!</p>
{/if}

{#if form?.errors}
	<ul class="error">
		<!-- {#if form?.errors.firstname}
			
		{/if} -->
		<!-- {#each form?.errors as error}
		{#if error != undefined}
		{#each error as err}
			<li></li>
		{/each}
			
		{/if}
		{/each} -->
			<li>
				<!-- {key}{error} -->
			</li>
	</ul>
	<!-- this message is ephemeral; it exists because the page was rendered in       response to a form submission. it will vanish if the user reloads -->
	<!-- <p class="success">Message received. Thanks for getting in touch!</p> -->
	{form?.errors}
{/if}

<div class="column">
	<form action="?/submit" method="post">
		<label for="fname">First Name</label>
		<input
			type="text"
			id="fname"
			name="firstname"
			value={form?.data?.firstname ?? ''}
			required
			placeholder="Your name.."
		/> <br />
		<label for="lname">Last Name</label>
		<input
			type="text"
			id="lname"
			name="lastname"
			value={form?.data?.lastname ?? ''}
			placeholder="Your last name.."
		/> <br />
		<label for="email">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			value={form?.data?.email ?? ''}
			required
			placeholder="example@example.com"
		/> <br />

		<label for="subject">Message</label>
		<textarea
			id="subject"
			name="message"
			value={form?.data?.message ?? ''}
			required
			placeholder="Write something..."
			style="height:170px"
		/>
		<input type="submit" value="Submit" />
	</form>
</div>

<style>
	/* Style inputs */
	input[type='text'],
	input[type='email'],
	textarea {
		width: 100%;
		padding: 12px;
		border: 1px solid #ccc;
		margin-top: 6px;
		margin-bottom: 16px;
		resize: vertical;
		font-size: 1rem;
	}

	input[type='submit'] {
		background-color: var(--first);
		color: white;
		padding: 12px 20px;
		border: none;
		cursor: pointer;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}

	input:invalid {
		border: 2px red;
	}

	input:required::after {
		content: '*';
	}

	.success {
		color: #45a049;
	}
	.error {
		color: red;
	}
</style>
