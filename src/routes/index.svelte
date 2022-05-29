<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const prerender = true;

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('https://api.adviceslip.com/advice');
		const data = await res.json();

		return {
			props: {
				advice: data
			},
			cache: {
				maxage: 30 // 1 minute
			},
			dependencies: ['advice']
		};
	};
</script>

<script lang="ts">
	import { invalidate } from '$app/navigation';
	import Typewriter from 'svelte-typewriter';

	import type { Advice } from 'src/lib/interfaces/advice';

	export let advice: Advice;

	let innerWidth: number;

	function fetchNewAdvice() {
		return invalidate('advice');
	}
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	<title>Adwizer - Advice Generator</title>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta name="description" content="A simple random advice generator!" />
	<meta name="keywords" content="advice,advice-generator" />
	<meta name="robots" content="index,nofollow" />
	<!-- Open Graph -->
	<meta property="og:title" content="Adwizer - Advice Generator" />
	<meta property="og:url" content="https://adwizer.netlify.app/" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="A simple random advice generator!" />
	<meta property="og:image" content="/demo/desktop-preview.jpg" />
	<meta property="og:image:alt" content="Shortly Preview" />
	<!-- Twitter -->
	<meta name="twitter:title" content="Adwizer - Advice Generator" />
	<meta name="twitter:description" content="A simple random advice generator!" />
	<meta name="twitter:image" content="/demo/desktop-preview.jpg" />
	<meta name="twitter:image:alt" content="Shortly - Demo" />
</svelte:head>

<main class="h-screen grid place-items-center bg-neutral-dark-blue">
	<article
		class="relative m-5 rounded-md bg-neutral-dark-grayish-blue shadow-xl px-6 pt-11 pb-16 flex flex-col items-stretch"
	>
		<h5 class="uppercase text-primary-neon text-center tracking-[0.3em] text-xs">
			Advice #{advice.slip.id}
		</h5>

		<Typewriter>
			<blockquote
				class="text-primary text-quote text-center font-extrabold max-w-[28ch] my-6 before:content-[open-quote] after:content-[close-quote]"
			>
				{advice.slip.advice}
			</blockquote>
		</Typewriter>
		{#if innerWidth > 768}
			<img src="/images/pattern-divider-desktop.svg" alt="Divider" />
		{:else}
			<img src="/images/pattern-divider-mobile.svg" alt="Divider" />
		{/if}
		<button
			id="dice"
			on:click={fetchNewAdvice}
			class="w-16 h-16 rounded-full bg-primary-neon hover:shadow-square hover:shadow-primary-neon p-2 grid place-items-center self-center absolute -bottom-0 translate-y-1/2"
		>
			<img src="/images/icon-dice.svg" alt="Dice" />
		</button>
	</article>
</main>
