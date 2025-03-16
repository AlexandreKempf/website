<script lang="ts">
	import Navbar from '$lib/navbar.svelte';
	import { AnimatedHeadline } from 'svelte-animated-headline';
	import { activePage, isMenuClicked } from '$lib/store.js';
	import { dev } from '$app/environment';
	import Layout from './+layout.svelte';

	let shuffle = (list: any[]) => list.sort((a, b) => 0.5 - Math.random());
	let yPosition: number;
	let thingsILove: string[] = [
		'open source',
		'Svelte',
		'helping people',
		'neurosciences',
		'data science',
		'UnoCSS',
		'feminism',
		'functional programming',
		'to create tools for neuroscientists',
		'video games',
		'T1 Faker',
		'to create tools for data scientists',
		'Markdown',
		'Georges Brassens',
		'Django Reinhardt'
	];
	let thingsIHate: string[] = [
		'Beamer presentation',
		"javascript's ==",
		'eating cold',
		'coffee',
		'new POTUS'
	];
	let thingsIWant: string[] = [
		'finish an Ironman',
		'work with AI and neurosciences',
		'be GC in Rocket League',
		'cross the atlantic on a sailing boat'
	];

	function menuBasedOnPositon(yPosition: number) {
		if (yPosition <= 840) {
			$activePage = 'home';
		} else if (yPosition <= 2760) {
			$activePage = 'education';
		} else if (yPosition <= 4920) {
			$activePage = 'profile';
		} else if (yPosition <= 8700) {
			$activePage = 'motivation';
		} else if (yPosition > 8700) {
			$activePage = 'contact';
		}
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
			href="https://deemea.com/"
			class="square w-70 h-70 left-10% no-underline hover:underline hover:decoration-white"
			target="_blank"
		>
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet6.png" alt="pic1" class="w-40% m-3" />
				<p class="text-white text-center">2024-now</p>
				<p class="text-xl text-white font-bold text-center">Lead Data Ops</p>
				<p class="text-white text-center">medical ops</p>
			</div>
		</a>
		<a
			href="https://dvc.ai/"
			class="square w-100 h-100 -left-10% no-underline hover:underline hover:decoration-white"
			target="_blank"
		>
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet5.png" alt="pic1" class="w-40% m-3" />
				<p class="text-white text-center">2024-2024</p>
				<p class="text-xl text-white font-bold text-center">Senior Product Engineer</p>
				<p class="text-white text-center">MLops and open source</p>
			</div>
		</a>

		<a
			href="https://www.lixo.tech/english/en"
			class="square w-70 h-70 left-16% no-underline hover:underline hover:decoration-white"
			target="_blank"
		>
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet4.png" alt="pic1" class="w-50% m-3" />
				<p class="text-white text-center">2022-2024</p>
				<p class="text-xl text-white font-bold text-center">Machine Learning <br />Lead R&D</p>
				<p class="text-white text-center">computer vision <br />& MLops</p>
			</div>
		</a>
		<a
			href="https://pandascore.co/"
			class="square w-100 h-100 -left-15% no-underline hover:underline hover:decoration-white"
			target="_blank"
		>
			<i style="--clr:#00ff0a;" />
			<i style="--clr:#e91e63;" />
			<i style="--clr:#fffd44;" />
			<div class="flex flex-col items-center">
				<img src="planet3.png" alt="pic1" class="w-70% m-3" />
				<p class="text-white text-center">2018-2022</p>
				<p class="text-xl text-white font-bold">Data Scientist</p>
				<p class="text-white text-center">computer vision <br />& MLops</p>
			</div>
		</a>

		<a
			href="https://www.bathellier-lab.org/"
			class="square w-120 h-120 left-12% no-underline hover:underline hover:decoration-white"
			target="_blank"
		>
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
		<a
			href="https://www.edu.bio.ens.psl.eu/spip.php?rubrique44&lang=en"
			class="square w-70 h-70 -left-10% no-underline hover:underline hover:decoration-white"
			target="_blank"
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
	</div>
	<div class="h-100" />
	<div id="profile">
		<div class="m-8 pt-70 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I <span>❤️ </span>
				<AnimatedHeadline texts={shuffle(thingsILove)} y={30} wait={1000} slide={500} fade={300} />
			</p>
		</div>
		<div class="m-8 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I would <span>❤️</span> to
				<AnimatedHeadline texts={shuffle(thingsIWant)} y={30} wait={1000} slide={500} fade={250} />
			</p>
		</div>
		<div class="m-8 text-xl text-white w-100% mx-auto text-center">
			<p class="text-white">
				I <span>💔 </span>
				<AnimatedHeadline texts={shuffle(thingsIHate)} y={30} wait={1000} slide={500} fade={200} />
			</p>
		</div>
	</div>
	<div class="relative">
		<img
			src="cloud1.webp"
			alt="cloud for illustration"
			style="--i:1;"
			class="clouds absolute op-70"
		/>
		<img
			src="cloud2.webp"
			alt="cloud for illustration"
			style="--i:2;"
			class="clouds absolute op-80"
		/>
		<img
			src="cloud3.webp"
			alt="cloud for illustration"
			style="--i:3;"
			class="clouds absolute op-90"
		/>
		<img
			src="cloud4.webp"
			alt="cloud for illustration"
			style="--i:4;"
			class="clouds absolute op-80"
		/>
		<img
			src="cloud5.webp"
			alt="cloud for illustration"
			style="--i:5;"
			class="clouds absolute op-70"
		/>
	</div>
	<div class="h-400" />
	<div id="motivation">
		<div class="mt-70 w-90% mx-auto lg:ml-56% lg:w-35%">
			<p class="text-xl lg:text-2xl text-white">
				I've always loved neurosciences, data science and computer science. <br />After a master
				degree from the ENS Ulm, I obtained a
				<em class="text-#00ff0a">PhD degree in neurosciences and machine learning</em>. My work lead
				to the creation of
				<a
					class="text-#00ff0a"
					href="https://scholar.google.com/citations?user=ZZw5eWoAAAAJ&hl=fr&oi=ao"
					target="_blank">6 scientific articles</a
				>
				published in international journals, and to the creation of HearLight, a startup founded by my
				PhD supervisor. <br />
				After the PhD, I specialized in
				<em class="text-#00ff0a">AI, software development and Dev/MLops</em>
				working in start-ups: Pandascore, Lixo, DVC, Deemea. I contributed to the scale up of these companies
				by providing efficient tools, AI models and intellectual property support. <br />
				I've never had the chance to work in neurosciences and computer science, but I believe
				<em class="text-#00ff0a">Brain&Mind</em> is the perfect structure to do so.
			</p>
		</div>
		<div class="mt-20 w-90% mx-auto lg:ml-10% lg:w-35%">
			<p class="text-xl lg:text-2xl text-white lg:text-right">
				During my free time I code neuroscience projects: 2 softwares for <em class="text-#00ff0a"
					>neurocognitive tests</em
				>
				(<a class="text-#00ff0a" href="https://attention-auditive.vercel.app/" target="_blank">🔗</a
				>
				and
				<a class="text-#00ff0a" href="https://reponses-associees.vercel.app/" target="_blank">🔗</a
				>) and a tool to automate
				<em class="text-#00ff0a">neuropsychologist reports generation</em>. I also created a game
				where the player was controled by EEG signals in real time. Among other projects, I also
				built a website to help the diagnosis of endometriosis called
				<a class="text-#00ff0a" href="https://endometric.vercel.app" target="_blank">endometric</a>,
				and a
				<a
					class="text-#00ff0a"
					href="https://alexandrekempf-forces-evolutives.streamlit.app/"
					target="_blank">biostatistic website</a
				>
				to explain evolution pressures. Most of my projects are open source and can be found on my
				<a class="text-#00ff0a" href="https://github.com/AlexandreKempf" target="_blank"
					>github profile</a
				>. I love to create tools to help other developers or self-host apps and data on my own
				server. By doing so I became
				<em class="text-#00ff0a">efficient at software prototyping</em>, website development,
				deployment and AI generation. <br />
				My current project is a mobile app as a side project using Capacitor and multiple AI models.
			</p>
		</div>
		<div class="mt-20 w-90% mx-auto lg:ml-56% lg:w-35%">
			<p class="text-xl lg:text-2xl text-white">
				I had the chance to discuss with Barbara André about the Brain&Mind project. I could guide
				startups in need of tehcnical advice on a broad range of topics: neurosciences, R&D,
				software development, AI, cloud, web, devops, deploiement, and intellectual property.
				<em class="text-#00ff0a"
					>My expertise is precisely what startups wants when they seek technical guidance from
					Brain&Mind.</em
				>
			</p>
		</div>
		<div class="mt-20 w-90% mx-auto lg:ml-10% lg:w-35%">
			<p class="text-xl lg:text-2xl text-white lg:text-right">
				I'm working full remote since 2020. Loving life at home with my girlfriend, cats, and the
				fridge nearby. <br />
				<em class="text-#00ff0a">I'm very social</em> and organized every offsites for my companies
				for the last 3 years. Even though I heard Brain&Mind is not a remote company, I truly think
				I'm a social facilitator and I can be a
				<em class="text-#00ff0a">key asset for the team technicaly and socially.</em>
			</p>
		</div>
		<div class="mt-20 w-90% mx-auto lg:ml-56% lg:w-35%">
			<p class="text-xl lg:text-2xl text-white">
				My technical stack: <br />
				<em class="text-#00ff0a">lang:</em> python, ts, sql, rust(new)<br />
				<em class="text-#00ff0a">AI:</em> MLP, CNN, LLM, torch<br />
				<em class="text-#00ff0a">cloud:</em> GCP, AWS, self-host<br />
				<em class="text-#00ff0a">web:</em> svelte, tailwind, capacitor(new)<br />
				<em class="text-#00ff0a">Devops:</em> git, CI/CD, docker, dvc, grafana, loki, prometheus,
				kubernetes(new), terraform(new)<br />
				<em class="text-#00ff0a">other:</em> notion, monday, slack, inkscape, GIMP, blender, godot<br
				/>
			</p>
		</div>
		<div class="mt-20 w-90% mx-auto lg:ml-10% lg:w-35%">
			<p class="text-xl lg:text-2xl text-white lg:text-right">
				Beside work, I like to play volleyball, badminton, and to play games. I'm a big fan of board
				games and video games. I also like music and cooking pizzas.
			</p>
		</div>
	</div>

	<div class="h-50" />

	<div id="contact">
		<div class="pt-70 w-80% mx-auto flex justify-between flex-wrap">
			<a
				href="tel:+33611503661"
				class="no-underline mx-auto hover:underline hover:decoration-white"
				target="_blank"
			>
				<div class="flex flex-col items-center w-50">
					<div class="i-iconoir-phone m-10 text-white w-10 h-10" />
					<p class="text-xl text-white no-underline">+336 11 50 36 61</p>
				</div>
			</a>

			<a
				href="mailto: alexandre.kempf@learningplanetinstitute.org"
				class="no-underline mx-auto hover:underline hover:decoration-white"
				target="_blank"
			>
				<div class="flex flex-col items-center w-50">
					<div class="i-iconoir-mail m-10 text-white w-10 h-10" />
					<p class="text-xl text-white no-underline">
						alexandre.kempf<br />@learningplanetinstitute.org
					</p>
				</div>
			</a>
			<a
				href="https://www.linkedin.com/in/alexandre-kempf-phd-7aab53109/"
				class="no-underline mx-auto hover:underline hover:decoration-white"
				target="_blank"
			>
				<div class="flex flex-col items-center w-50">
					<div class="i-iconoir-linkedin m-10 text-white w-10 h-10" />
					<p class="text-xl text-white">Alexandre Kempf</p>
				</div>
			</a>
			<a
				href="https://www.instagram.com/pizzas_never_lie/"
				class="no-underline mx-auto hover:underline hover:decoration-white"
				target="_blank"
			>
				<div class="flex flex-col items-center w-50">
					<div class="i-iconoir-instagram m-10 text-white w-10 h-10" />
					<p class="text-xl text-white no-underline">pizzas_never_lie</p>
				</div>
			</a>
			<a
				href="https://www.facebook.com/alexandre.kempf.73/"
				class="no-underline mx-auto hover:underline hover:decoration-white"
				target="_blank"
			>
				<div class="flex flex-col items-center w-50">
					<div class="i-iconoir-facebook m-10 text-white w-10 h-10" />
					<p class="text-xl text-white">Alexandre Kempf</p>
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
		background: url('$lib/wave.png');
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
