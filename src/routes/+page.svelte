<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import { fly, fade } from 'svelte/transition';
	import { AnimatedHeadline } from 'svelte-animated-headline';

	let shuffle = (list) => {
		list
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		return list;
	};
	let yPosition: number;
	let thingsILove: string[] = [
		'Svelte',
		'biology',
		'data science',
		'the planet',
		'UnoCSS',
		'slide decks',
		'design',
		'functional programming',
		'video games',
		'T1 Faker',
		'Markdown'
	];
	let thingsIHate: string[] = ['Beamer deck', 'LaTeX', 'javascript', 'eating cold'];
</script>

<svelte:window bind:scrollY={yPosition} />

<div class="flex flex-col justify-between min-h-screen">
	<Navbar />

	<div class="mx-auto my-30 flex flex-col items-center">
		<img src="astronaut.svg" alt="astronaut" class="fixed w-13 animate-[pulse_2s_infinite]" />
		{#if yPosition == 0}
			<div out:fade class="m-20 h-30 text-xl text-white">
				<div class="typing-demo">Alexandre Kempf.</div>
			</div>
		{:else}
			<div class="h-30 m-20" />
		{/if}
		<div class="h-150" />
		<div id="profile">
			<div class="h-50" />
			{#if yPosition >= 400 && yPosition <= 1050}
				<div
					in:fade={{ duration: 1000 }}
					out:fade
					class="m-5 text-xl text-white w-120 mx-auto text-center"
				>
					<p class="text-white">
						I <span>❤️</span>
						<AnimatedHeadline
							texts={shuffle(thingsILove)}
							y={30}
							wait={500}
							slide={500}
							fade={300}
						/>
					</p>
				</div>
				<div
					in:fade={{ duration: 1000 }}
					out:fade
					class="m-5 text-xl text-white w-120 mx-auto text-center"
				>
					<p class="text-white">
						I <span>💩</span>
						<AnimatedHeadline
							texts={shuffle(thingsIHate)}
							y={30}
							wait={500}
							slide={500}
							fade={200}
						/>
					</p>
				</div>
			{/if}
		</div>
		<div class="h-screen" />
	</div>
	<p class="fixed text-white">{yPosition}</p>
</div>

<style>
	p {
		font-family: Sono, monospace;
	}
	p span {
		font-family: Arial, Helvetica, sans-serif;
	}
	.typing-demo {
		width: 16ch;
		animation: typing 2s steps(22), blink 0.5s step-end alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 2px solid;
		font-family: Sono, monospace;
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
