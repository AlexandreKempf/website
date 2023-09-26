<script>
	import Navbar from '$lib/navbar.svelte';
	import { fly, fade } from 'svelte/transition';

	import { active_page } from '$lib/store.js';
</script>

<div class="flex flex-col justify-between w-screen h-screen">
	<div class="mx-50% my-30 flex flex-col items-center">
		{#if $active_page == 'home'}
			<img src="astronaut.svg" alt="astronaut" class="w-13 animate-[pulse_2s_infinite]" />
			<div class="m-5 text-xl text-white">
				<div class="typing-demo">Lost in the web.</div>
			</div>
		{:else if $active_page == 'profile'}
			<img src="astronaut.svg" alt="astronaut" class="w-13 animate-[pulse_2s_infinite]" />
			<div class="m-5 text-xl text-white">
				<div class="typing-demo">Alexandre Kempf.</div>
			</div>
			<p class="w-70 text-white leading-6 my-2" in:fly={{ y: 200, duration: 2000, delay: 2000 }}>
				Born a biologist in 1992, <br />
				PhD in neurosciences in 2018, <br />
				I love videogames (except Dota-2), <br />
				volleyball, badminton and sailing.
			</p>
			<p class="w-70 text-white leading-6 my-2" in:fly={{ y: 200, duration: 2000, delay: 3000 }}>
				Try my best at functional programming, <br />
				code useless things on my free time. <br />
				Waste time on the internet of things <br />
				then complain on my deadlines.
			</p>
			<p class="w-70 text-white leading-6 my-2" in:fly={{ y: 200, duration: 2000, delay: 4000 }}>
				I find Svelte smooth as butter, <br />
				but I hate javascript. <br />
				I don't like python neither. <br />
				but a boy needs to eat.
			</p>
		{/if}
	</div>
	<Navbar />
</div>

<style>
	.typing-demo {
		width: 16ch;
		animation: typing 2s steps(22), blink 0.5s step-end alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 2px solid;
		font-family: VT323, monospace;
	}

	@keyframes typing {
		from {
			width: 0;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>
