<script>
	import Icon from '@iconify/svelte';
	let contact = false;
	import { blur } from 'svelte/transition';
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Me | JePense</title>
	<meta name="description" content="Introducing myself" />
</svelte:head>

{#if contact}
	<div id="contactModal" class="modal" transition:blur>
		<!-- Modal content -->
		<div class="modal-content">
			<button class="close" on:click={() => (contact = false)}>&times;</button>
			<h3>Contact</h3>

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
		</div>
	</div>
{/if}

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

<button id="contact" on:click={() => (contact = true)}>
	<Icon icon="material-symbols:send-rounded" width="36" height="1rem" color="white" />
</button>
<div class="row jusitfy jc">
	<div class="col-m-10 col-s-11 col-l-9 f-lll">
		<div class="f-ll">
			<div class="row items-x-cente ai-c">
				<div class="col-l-3">
					<div class="column items-x-center">
						<img id="me" src="/me.jpg" alt="Ali Bakhshandeh" width="200" height="200" />
						<!-- <div class="mt-md gx-sm">
					<a href="https://twitter.com/__free4ever__" target="_blank">
						<img src="/jepense/img/twitter.jpg" width="20" height="20" alt="twitter" />
					</a>
					<a href="https://linkedin.com/in/ali-bakhshandeh" target="_blank">
						<img src="/jepense/img/linkedin.svg" width="20" height="20" alt="linkedin" />
					</a>
					<a href="https://instagram.com/___free4ever___" target="_blank">
						<img src="/jepense/img/insta.png" width="20" height="20" alt="Intagram" />
					</a>
				</div> -->
					</div>
				</div>
				<ul class="details">
					<li>Name: <span class="f-marck f-lll"> Ali Bakhshandeh </span></li>
					<li>DoB: <span class="f-marck f-lll">07/10/1991</span></li>
					<li>Nationality: <span class="f-marck f-lll"> 🇮🇷 Iranian </span></li>
					<!-- <li>Location: <span class="f-marck f-lll">UK</span></li> -->
				</ul>
				<!-- <div></div> -->
			</div>
			<div>
				<h4>General Skills</h4>

				<h4>🛠 Tech Skills</h4>
				<div class="row text-center g-md">
					<div class="col-s-3">
						Web Development
						<div class="myProgress">
							<div id="web" class="bar">85%</div>
						</div>
					</div>
					<div class="col-s-3">
						Game Dev
						<div class="myProgress">
							<div id="game" class="bar">30%</div>
						</div>
					</div>
					<div class="col-s-3">
						Desktop Dev
						<div class="myProgress">
							<div id="desktop" class="bar">20%</div>
						</div>
					</div>
				</div>
				<div class="column my-lg">
					<h4>🍷 Interests</h4>
					I love programming, web and game development in the CS field. Also have an active interest
					in world literature, philosophy, spirituality and a lot more!
				</div>
				<div class="column my-lg">
					<h4>🎓 Education</h4>
					<ul class="my-n">
						<li>MEng, BSc Computer Science, 2016-20, University of Leeds</li>
						<li>BA English Language and Literature, 2012-16, Shiraz University, Iran</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	#contact {
		position: fixed;
		right: -70rem;
		bottom: 2rem;
		/* display: none; */
		/* display: inline-block; */
		width: 65px;
		height: 65px;
		border-radius: 100%;
		border: 2px solid black;
		box-shadow: 3px 4px #999;
		cursor: pointer;
		/* transform: trans; */
		background: var(--gradient);
		color: var(--grey3);
		transition: all 0.5s;
		animation: slide-left 2s ease-out 1s 1 normal forwards;

		&:active {
			background-color: #3e8e41;
			box-shadow: 2px 3px #666;
			transform: translate(2px, 3px);
			/* transform: translateY(3px); */
		}
	}

	@keyframes slide-left {
		from {
			right: -7rem;
			display: inline-block;
		}

		to {
			right: 1rem;
			display: inline-block;
		}
	}

	.modal {
		/* display: none; */
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		padding-top: 100px; /* Location of the box */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgb(0, 0, 0); /* Fallback color */
		background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
	}

	/* Modal Content */
	.modal-content {
		background-color: #fefefe;
		margin: auto;
		padding: 20px;
		border: 1px solid #888;
		width: 50%;
		border-radius: 5px;
		border: 2px solid var(--first);
	}

	/* The Close Button */
	.close {
		color: #aaaaaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		background: unset;
		border: none;
	}

	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}
	img {
		border-radius: 20px;
		animation: appear 1s linear 1.5s 1 normal forwards;
		transform: scale(0.001);
	}

	@keyframes appear {
		from {
			transform: scale(0.1);
		}

		to {
			transform: scale(1);
		}
	}

	ul.details {
		list-style: none;
		font-size: 1.2em;
	}

	.myProgress {
		width: 100%;
		background-color: #ddd;
	}

	.bar {
		height: 25px;
		background-color: #4caf50;
		text-align: center;
		line-height: 25px;
		color: white;
	}

	#web {
		width: 85%;
		animation-name: webDev;
		animation-duration: 2s;
		background-color: var(--royal);
	}

	#game {
		width: 30%;
		animation-name: gameDev;
		animation-duration: 2s;
		background-color: var(--gold);
	}

	#desktop {
		width: 20%;
		animation-name: desktopDev;
		animation-duration: 2s;
	}

	@keyframes webDev {
		from {
			width: 0%;
		}

		to {
			width: 85%;
		}
	}

	@keyframes desktopDev {
		from {
			width: 0%;
		}

		to {
			width: 20%;
		}
	}

	@keyframes gameDev {
		from {
			width: 0%;
		}

		to {
			width: 30%;
		}
	}

	input,
	textarea {
		width: 100%;
		padding: 12px;
		border: 2px solid var(--first);
		margin-top: 6px;
		margin-bottom: 16px;
		resize: vertical;
		font-size: 1rem;
		/* outline: 2px solid var(--first); */
	}

	input[type='submit'] {
		background-color: var(--first);
		color: white;
		padding: 12px 20px;
		border: none;
		cursor: pointer;
		border-radius: 5px;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}

	/* input:invalid {
		border: 2px red;
	} */

	input:required::after {
		content: '*';
	}

	.success {
		color: #45a049;
	}
	.error {
		color: red;
	}

	@media only screen and (max-width: 768px) {
		.modal-content {
			/* margin: auto; */
			padding: 0.5rem;
			/* border: 1px solid #888; */
			width: 95%;
		}
	}
</style>
