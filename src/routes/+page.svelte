<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import { AnimatedHeadline } from 'svelte-animated-headline';

	let shuffle = (list) => list.sort((a, b) => 0.5 - Math.random());
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
		'Markdown',
		'songbirds'
	];
	let thingsIHate: string[] = ['Beamer deck', 'LaTeX', 'javascript', 'eating cold', 'coffee'];
	let thingsIWant: string[] = [
		'finish an Ironman',
		'contribute to open source',
		'be GC in Rocket League',
		'sail through the atlantic'
	];
</script>

<svelte:window bind:scrollY={yPosition} />

<div class="flex flex-col justify-between min-h-screen scroll-smooth">
	<Navbar />

	<div class="mx-auto my-30 flex flex-col items-center">
		<img src="astronaut.svg" alt="astronaut" class="fixed w-13 h-13 animate-[pulse_2s_infinite]" />
		<div class="m-30 h-30 text-xl text-white {yPosition >= 120 ? 'hidden' : ''}">
			<div class="typing-demo">Alexandre Kempf.</div>
		</div>
	</div>
	<div class="h-200" />
	<div id="photos" class="pt-30 flex flex-col items-center">
		<div class="square w-70 h-70 -left-20%">
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#ff0057;" />
			<i style="--clr:#fffd44;" />
			<img src="pic3.webp" alt="pic1" class="w-70% rounded-full" />
		</div>

		<div class="square w-120 h-120 left-30%">
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#ff0057;" />
			<i style="--clr:#fffd44;" />
			<img src="pic1.webp" alt="pic1" class="w-70% rounded-full" />
		</div>

		<div class="square w-100 h-100 -left-30%">
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#ff0057;" />
			<i style="--clr:#fffd44;" />
			<img src="pic2.webp" alt="pic1" class="w-70% rounded-full" />
		</div>

		<div class="square w-50 h-50 left-20%">
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#ff0057;" />
			<i style="--clr:#fffd44;" />
			<img src="pic4.webp" alt="pic1" class="w-70% rounded-full" />
		</div>
	</div>
	<div class="h-100" />
	<div id="profile">
		<div class="m-8 pt-70 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I <span>💚</span>
				<AnimatedHeadline texts={shuffle(thingsILove)} y={30} wait={500} slide={500} fade={300} />
			</p>
		</div>
		<div class="m-8 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I <span>💩</span>
				<AnimatedHeadline texts={shuffle(thingsIHate)} y={30} wait={500} slide={500} fade={200} />
			</p>
		</div>
		<div class="m-8 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I would <span>💚</span> to
				<AnimatedHeadline texts={shuffle(thingsIWant)} y={30} wait={500} slide={500} fade={250} />
			</p>
		</div>
	</div>
	<div class="relative">
		<img src="cloud1.webp" style="--i:1;" class="clouds absolute op-70" />
		<img src="cloud2.webp" style="--i:2;" class="clouds absolute op-80" />
		<img src="cloud3.webp" style="--i:3;" class="clouds absolute op-90" />
		<img src="cloud4.webp" style="--i:4;" class="clouds absolute op-80" />
		<img src="cloud5.webp" style="--i:5;" class="clouds absolute op-70" />
	</div>
	<div class="h-400" />

	<div id="code">
		<div class="m-8 pt-70 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I <span>💚</span>
				<AnimatedHeadline texts={shuffle(thingsILove)} y={30} wait={500} slide={500} fade={300} />
			</p>
		</div>
	</div>
	<div class="h-300" />
</div>

<style>
	.clouds {
		animation: cloudanimate calc(8s * var(--i)) linear infinite;
	}

	@keyframes cloudanimate {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(100%);
		}
	}
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

	/*  */

	.square {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.square i {
		position: absolute;
		inset: 0;
		border: 2px solid #fff;
		transition: 0.5s;
	}
	.square i:nth-child(1) {
		border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
		animation: animate 6s linear infinite;
	}
	.square i:nth-child(2) {
		border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
		animation: animate 4s linear infinite;
	}
	.square i:nth-child(3) {
		border-radius: 41% 44% 56% 59%/38% 62% 63% 37%;
		animation: animate2 10s linear infinite;
	}
	.square:hover i {
		border: 6px solid var(--clr);
		filter: drop-shadow(0 0 20px var(--clr));
	}
	@keyframes animate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes animate2 {
		0% {
			transform: rotate(360deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
