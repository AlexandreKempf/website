<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import { AnimatedHeadline } from 'svelte-animated-headline';
	import { activePage, isMenuClicked } from '$lib/store.js';

	let shuffle = (list) => list.sort((a, b) => 0.5 - Math.random());
	let yPosition: number;
	let thingsILove: string[] = [
		'DVC',
		'Svelte',
		'neurosciences',
		'data science',
		'UnoCSS',
		'functional programming',
		'video games',
		'T1 Faker',
		'Markdown',
		'Georges Brassens',
		'Django Reinhardt'
	];
	let thingsIHate: string[] = ['Beamer presentation', 'javascript', 'eating cold', 'coffee', 'W&B'];
	let thingsIWant: string[] = [
		'finish an Ironman',
		'contribute to open source',
		'be GC in Rocket League',
		'sail through the atlantic',
		'work for iterative.ai on DVCx'
	];

	function menuBasedOnPositon(yPosition) {
		console.log(yPosition);
		if (yPosition <= 840) {
			$activePage = 'home';
		} else if (yPosition <= 2760) {
			$activePage = 'education';
		} else if (yPosition <= 4920) {
			$activePage = 'profile';
		} else if (yPosition <= 7000) {
			$activePage = 'motivation';
		} else if (yPosition > 7000) {
			$activePage = 'contact';
		}
		console.log(yPosition);
	}
	$: {
		yPosition;
		$isMenuClicked ? null : menuBasedOnPositon(yPosition);
	}
	// setInterval(menuBasedOnPositon, 2000);
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
	<div id="education" class="pt-30 flex flex-col items-center">
		<a
			href="https://www.edu.bio.ens.psl.eu/spip.php?rubrique44&lang=en"
			class="square w-70 h-70 -left-20%"
		>
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet1.png" alt="pic1" class="w-40% m-3" />
				<p class="text-white text-center">2012-2015</p>
				<p class="text-xl text-white font-bold">master degree</p>
				<p class="text-white text-center">neurosciences <br />& maths</p>
			</div>
		</a>
		<a href="https://www.bathellier-lab.org/" class="square w-120 h-120 left-30%">
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet2.png" alt="pic1" class="w-50% m-3" />
				<p class="text-white text-center">2015-2018</p>
				<p class="text-xl text-white font-bold">PhD degree</p>
				<p class="text-white text-center">neurosciences <br />& data science</p>
			</div>
		</a>

		<a href="https://pandascore.co/" class="square w-100 h-100 -left-30%">
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet3.png" alt="pic1" class="w-70% m-3" />
				<p class="text-white text-center">2018-2022</p>
				<p class="text-xl text-white font-bold">Datascientist</p>
				<p class="text-white text-center">computer vision <br />& MLops</p>
			</div>
		</a>

		<a href="https://www.lixo.tech/english/en" class="square w-70 h-70 left-20%">
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet4.png" alt="pic1" class="w-50% m-3" />
				<p class="text-white text-center">2022-now</p>
				<p class="text-xl text-white font-bold text-center">Lead R&D <br />Datascientist</p>
				<p class="text-white text-center">computer vision <br />& MLops</p>
			</div>
		</a>
	</div>
	<div class="h-100" />
	<div id="profile">
		<div class="m-8 pt-70 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I <span>💚</span>
				<AnimatedHeadline texts={shuffle(thingsILove)} y={30} wait={1000} slide={500} fade={300} />
			</p>
		</div>
		<div class="m-8 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I <span>💩</span>
				<AnimatedHeadline texts={shuffle(thingsIHate)} y={30} wait={1000} slide={500} fade={200} />
			</p>
		</div>
		<div class="m-8 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I would <span>💚</span> to
				<AnimatedHeadline texts={shuffle(thingsIWant)} y={30} wait={1000} slide={500} fade={250} />
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
	<div id="motivation">
		<div class="mt-70 ml-56% w-30%">
			<p class="text-3xl text-white">
				I've always been a fan of <em class="text-#00ff0a">open source</em>. All my personal
				projects are on
				<a href="https://github.com/AlexandreKempf" class="text-white">github</a>.<br /> I currently
				have 41 repos and 88 ⭐. <br />The ones I like the most are:
				<br />-
				<a href="https://github.com/AlexandreKempf/spy-game" class="text-white">spy-game</a>
				<br />-
				<a href="https://github.com/AlexandreKempf/svelte-slides" class="text-white"
					>svelte-slides</a
				>
				<br />-
				<a href="https://github.com/AlexandreKempf/svelte-apex" class="text-white">svelte-apex</a>
			</p>
		</div>
		<div class="mt-20 ml-14% w-30%">
			<p class="text-3xl text-white text-right">
				I love <em class="text-#00ff0a">data pipeline</em>. <br />I use them on a daily basis since
				2018. I created my own tools then discovered <em class="font-bold">DVC</em> in 2019 and my life
				changed for the better.
			</p>
		</div>
		<div class="mt-20 ml-56% w-30%">
			<p class="text-3xl text-white">
				I work with <em class="text-#00ff0a">distributed processes</em> since 2018. <br />
				I maintained a 3GPUs & 8CPUs python app for real-time analysis of twitch streams. <br />
				I created several MLops pipeline on cloud or homemade servers (2GPUs 32CPUs cores) and optimized
				them to reduce training time by 2. Datasets were usually between 100Go and 1To.
			</p>
		</div>
		<div class="mt-20 ml-14% w-30%">
			<p class="text-3xl text-white text-right">
				I'm working <em class="text-#00ff0a">full remote</em> since 2021. Loving my life at home
				with my gf, my cats, and the fridge nearby. <br />
				I stay in contact with my team thanks to
				<em class="font-bold">Notion</em>, <em class="font-bold">Slack</em> and the
				<em class="font-bold">Agile</em> methods.
			</p>
		</div>
		<div class="mt-20 ml-56% w-30%">
			<p class="text-3xl text-white">
				I love to <em class="text-#00ff0a">learn</em> and I'm always
				<em class="text-#00ff0a">up for challenges</em>. I learned computer science and datascience
				as an autodidact, and I'm now a proficient fullstack datascientist / python engineer,
				working on real-time video processing and R&D deep learning topics.
			</p>
		</div>
	</div>
	<div class="h-50" />

	<div id="contact">
		<div class="pt-70 w-80% mx-auto flex justify-between flex-wrap">
			<a href="tel:+33611503661" class="no-underline hover:underline hover:decoration-white">
				<div class="flex flex-col items-center">
					<div class="i-iconoir-phone m-10 text-white w-10 h-10" />
					<p class="text-3xl text-white no-underline">+336 11 50 36 61</p>
				</div>
			</a>

			<a
				href="mailto: alexandre.kempf@cri-paris.org"
				class="no-underline hover:underline hover:decoration-white"
			>
				<div class="flex flex-col items-center">
					<div class="i-iconoir-mail m-10 text-white w-10 h-10" />
					<p class="text-3xl text-white no-underline">alexandre.kempf<br />@cri-paris.org</p>
				</div>
			</a>
			<a
				href="https://www.instagram.com/pizzas_never_lie/"
				class="no-underline hover:underline hover:decoration-white"
			>
				<div class="flex flex-col items-center">
					<div class="i-iconoir-instagram m-10 text-white w-10 h-10" />
					<p class="text-3xl text-white no-underline">pizzas_never_lie</p>
				</div>
			</a>
			<a
				href="https://www.facebook.com/alexandre.kempf.73/"
				class="no-underline hover:underline hover:decoration-white"
			>
				<div class="flex flex-col items-center">
					<div class="i-iconoir-facebook m-10 text-white w-10 h-10" />
					<p class="text-3xl text-white">Alexandre Kempf</p>
				</div>
			</a>
		</div>
	</div>
	<div class="h-100" />

	<div class="w-100% relative">
		<div class="wave" id="wave1" />
		<div class="wave" id="wave2" />
		<div class="wave" id="wave3" />
		<div class="wave" id="wave4" />
	</div>
</div>

<style>
	.wave {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100px;
		background: url('wave.png');
		background-size: 1000px 100px;
	}
	.wave#wave1 {
		z-index: 1000;
		opacity: 1;
		bottom: 0;
		animation: waveAnimation 4s linear infinite;
	}
	.wave#wave2 {
		z-index: 999;
		opacity: 0.5;
		bottom: 10px;
		animation: waveAnimation2 4s linear infinite;
	}
	.wave#wave3 {
		z-index: 998;
		opacity: 0.2;
		bottom: 15px;
		animation: waveAnimation 2s linear infinite;
	}
	.wave#wave4 {
		z-index: 999;
		opacity: 0.7;
		bottom: 20px;
		animation: waveAnimation2 2s linear infinite;
	}

	@keyframes waveAnimation {
		0%,
		100% {
			background-position-x: 1000px;
		}
		100% {
			background-position-x: 0px;
		}
	}
	@keyframes waveAnimation2 {
		0%,
		100% {
			background-position-x: 0px;
		}
		100% {
			background-position-x: 1000px;
		}
	}

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
