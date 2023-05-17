<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageServerData } from './$types';
	import HIM from '$lib/images/HIM.png'

	export let data: PageServerData;
	export let form: ActionData;
</script>

{#if form != null}
	<ul>
		{#if form?.invalid}
			<li class="error">Username and password is required.</li>
		{/if}
		{#if form?.credentials}
			<li class="error">You have entered the wrong credentials.</li>
		{/if}
	</ul>
{/if}

<form action="?/login" method="post" use:enhance>
	<div class="imgcontainer">
		<img src="{data.me ? HIM : ''}" alt="Avatar" class="avatar" />
	</div>

	<div class="container">
		<label for="uname"><b>Username</b></label>
		<input type="text" placeholder="Enter Username" name="username" required value="{form?.uname ?? ''}" />

		<label for="psw"><b>Password</b></label>
		<input type="password" placeholder="Enter Password" name="password" required />

		<label>
			<input type="checkbox" checked="checked" name="remember" /> Remember me
		</label>
		<button type="submit">Login</button>
	</div>
</form>

<style>
	form {
		border: 3px solid var(--first);
	}

	input[type='text'],
	input[type='password'] {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
	}

	button {
		background-color: var(--first);
		color: white;
		padding: 14px 20px;
		margin: 8px 0;
		border: none;
		cursor: pointer;
		width: 100%;
	}

	button:hover {
		opacity: 0.8;
	}

	.imgcontainer {
		text-align: center;
		margin: 24px 0 12px 0;
	}

	img.avatar {
		width: 40%;
		border-radius: 50%;
	}

	.container {
		padding: 16px;
	}

	.error {
		color: var(--red);
	}
</style>
