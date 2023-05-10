<script>
	import Icon from '@iconify/svelte';
	import Modal from '../Modal.svelte';
	let contact = false;
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<svelte:head>
	<title>Me | JePense</title>
	<meta name="description" content="Introducing myself" />
</svelte:head>

{#if contact}
	<Modal>
		<div slot="title">✉️ Contact Me</div>
		<div class="column" slot="content">
			<button class="close" on:click={() => (contact = false)}>&times;</button>
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
	</Modal>
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
					<div class="column items-x-cente">
						<img id="me" src="/me.jpg" alt="Ali Bakhshandeh" width="200" height="200" />
						<div class="mt-md gx-sm" />
					</div>
				</div>
				<div class="col-l-7 col-s-8">
					<ul class="details">
						<li>
							<div>Name</div>
							<div>Ali Bakhshandeh</div>
						</li>
						<li>
							<div>DoB</div>
							<div>07/10/1991</div>
						</li>
						<li>
							<div>Nationality</div>
							<div>Iranian</div>
						</li>
						<li>
							<div>Location</div>
							<div>UK</div>
						</li>
						<li>
							<div>Social</div>
							<div>
								<a href="https://twitter.com/__free4ever__" target="_blank">
									<!-- <img src="/jepense/img/twitter.jpg" width="20" height="20" alt="twitter" /> -->
									<Icon icon="mdi:twitter" color="var(--emplDS)" />
								</a>
								<a href="https://linkedin.com/in/ali-bakhshandeh" target="_blank">
									<Icon icon="mdi:linkedin" color="var(--emplDS)" />
									<!-- <img src="/jepense/img/linkedin.svg" width="20" height="20" alt="linkedin" /> -->
								</a>
								<a href="https://instagram.com/___free4ever___" target="_blank">
									<Icon icon="mdi:instagram" color="var(--emplDS)" />
									<!-- <img src="/jepense/img/insta.png" width="20" height="20" alt="Intagram" /> -->
								</a>
							</div>
						</li>
						<!-- <li>Location: <span class="f-marck f-lll">UK</span></li> -->
					</ul>
				</div>
				<!-- <div></div> -->
			</div>
			<div class="detailsExtended">
				<!-- <h4>Intro</h4>
				<div>
					A liberal
				</div> -->
				<h4>General Skills</h4>
				<div />

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
		right: 1rem;
		bottom: 2rem;
		opacity: 0;
		/* display: none; */
		/* display: inline-block; */
		width: 65px;
		height: 65px;
		border-radius: 100%;
		border: 2px solid black;
		box-shadow: 3px 4px #999;
		cursor: pointer;
		/* transform: trans; */
		background: var(--second);
		color: var(--grey3);
		transition: all 0.5s;
		animation: appear-bottom 1s ease-out 3s 1 normal forwards;
		z-index: 20;

		&:active {
			background-color: #3e8e41;
			box-shadow: 2px 3px #666;
			transform: translate(2px, 3px);
			/* transform: translateY(3px); */
		}
	}

	.detailsExtended {
		opacity: 0;
		animation: appear-bottom 1s ease 3s normal forwards;
	}

	@keyframes appear-bottom {
		from {
			opacity: 0.5;
			transform: translateY(10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes slide-left {
		from {
			right: -3rem;
			display: inline-block;
		}

		to {
			right: 1rem;
			display: inline-block;
		}
	}

	/* The Close Button */
	.close {
		color: #aaaaaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		background: unset;
		border: none;
		position: absolute;
		right: 3%;
		top: 3%;
	}

	.close:hover,
	.close:focus {
		color: #000;
		text-decoration: none;
		cursor: pointer;
	}
	#me {
		border-radius: 20px;
		animation: appear-left 1s linear 0.5s 1 normal forwards;
		transform: scale(0.001);
		margin: auto;
	}

	@keyframes appear-left {
		from {
			transform: scale(0.1);
			transform: translateX(-40px);
			opacity: 0;
		}

		to {
			transform: scale(1);
			transform: translateX(0);
			opacity: 1;
		}
	}

	ul.details {
		list-style: none;
		font-size: 1.2em;
		animation: appear-right 1s ease-out 2s 1 normal forwards;
		opacity: 0;

		& li {
			display: grid;
			grid-template-columns: 20% auto;
			gap: 1rem;
			margin-bottom: 0.5rem;
		}

		& li div:nth-child(2) {
			color: var(--emplDS);
		}

		& li div:first-child {
			font-weight: bold;
		}
	}

	@keyframes appear-right {
		from {
			opacity: 1;
			transform: translateX(30px);
		}

		to {
			opacity: 1;
			transform: translateX(0);
		}
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

	input:not([type='submit']),
	textarea {
		width: 100%;
		padding: 12px;
		border: 2px solid var(--first);
		border-radius: 15px;
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
		width: 100%;
	}

	input[type='submit']:hover {
		background-color: #45a049;
	}

	/* input:invalid {
		border: 2px red;
	} */

	input:required + label {
		/* content: '*'; */
		color: red;
	}

	.success {
		color: #45a049;
	}
	.error {
		color: red;
	}

	@media only screen and (max-width: 992px) {
		.modal-content {
			/* margin: auto; */
			padding: 0.5rem;
			/* border: 1px solid #888; */
			width: 95%;
		}

		ul.details {
			padding-left: 0.5rem;

			& li {
				grid-template-columns: 35% auto;
				/* gap: 1rem;
				margin-bottom: 0.5rem; */
			}
		}

		#contact {
			width: 45px;
			height: 45px;
		}
	}
</style>
