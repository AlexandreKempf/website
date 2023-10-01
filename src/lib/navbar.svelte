<script>
	import { animateScroll } from 'svelte-scrollto-element';
	import { activePage, isMenuClicked } from '$lib/store.js';
</script>

<div class="navigation">
	<ul>
		<li
			class="list {$activePage == 'home' ? 'active' : ''}"
			on:click={() => ($activePage = 'home')}
			on:keydown={() => ($activePage = 'home')}
		>
			<a
				href="#home"
				on:click={() =>
					animateScroll.scrollTo({
						element: '#home',
						duration: 2000,
						onStart: () => ($isMenuClicked = true),
						onDone: () => ($isMenuClicked = false)
					})}
			>
				<span class="icon">
					<div class="i-iconoir-home-alt" />
				</span>
				<span class="text">Home</span>
			</a>
		</li>
		<li
			class="list {$activePage == 'education' ? 'active' : ''}"
			on:click={() => ($activePage = 'education')}
			on:keydown={() => ($activePage = 'education')}
		>
			<a
				href="#education"
				on:click={() =>
					animateScroll.scrollTo({
						element: '#education',
						duration: 2000,
						onStart: () => ($isMenuClicked = true),
						onDone: () => ($isMenuClicked = false)
					})}
			>
				<span class="icon">
					<div class="i-iconoir-path-arrow" />
				</span>
				<span class="text">Career</span>
			</a>
		</li>

		<li
			class="list {$activePage == 'profile' ? 'active' : ''}"
			on:click={() => ($activePage = 'profile')}
			on:keydown={() => ($activePage = 'profile')}
		>
			<a
				href="#profile"
				on:click={() =>
					animateScroll.scrollTo({
						element: '#profile',
						duration: 2000,
						onStart: () => ($isMenuClicked = true),
						onDone: () => ($isMenuClicked = false)
					})}
			>
				<span class="icon">
					<div class="i-iconoir-user" />
				</span>
				<span class="text">Profile</span>
			</a>
		</li>

		<li
			class="list {$activePage == 'motivation' ? 'active' : ''}"
			on:click={() => ($activePage = 'motivation')}
			on:keydown={() => ($activePage = 'motivation')}
		>
			<a
				href="#motivation"
				on:click={() =>
					animateScroll.scrollTo({
						element: '#motivation',
						duration: 2000,
						onStart: () => ($isMenuClicked = true),
						onDone: () => ($isMenuClicked = false)
					})}
			>
				<span class="icon">
					<div class="i-iconoir-wrench" />
				</span>
				<span class="text">Skills</span>
			</a>
		</li>

		<li
			class="list {$activePage == 'contact' ? 'active' : ''}"
			on:click={() => ($activePage = 'contact')}
			on:keydown={() => ($activePage = 'contact')}
		>
			<a
				href="#contact"
				on:click={() =>
					animateScroll.scrollTo({
						element: '#contact',
						duration: 2000,
						onStart: () => ($isMenuClicked = true),
						onDone: () => ($isMenuClicked = false)
					})}
			>
				<span class="icon">
					<div class="i-iconoir-message" />
				</span>
				<span class="text">Contact</span>
			</a>
		</li>
		<div class="indicator" />
	</ul>
</div>

<style>
	:root {
		--clr: #0e131b;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: Sono, sans-serif;
	}
	.navigation {
		width: 400px;
		height: 70px;
		background: #fff;
		position: fixed;
		left: 50%;
		top: 20px;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		z-index: 1;
		border-radius: 10px;
		opacity: 90%;
	}
	.navigation ul {
		display: flex;
		width: 350px;
	}
	.navigation ul li {
		position: relative;
		list-style: none;
		width: 70px;
		height: 30px;
		margin-top: 25px;
		z-index: 1;
	}
	.navigation ul li a {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 100%;
		text-align: center;
	}
	.navigation ul li a .icon {
		position: relative;
		display: block;
		line-height: 75px;
		font-size: 2em;
		text-align: center;
		transition: 0.5s;
		color: #000;
	}
	.navigation ul li.active a .icon {
		transform: translateY(28px);
	}
	.navigation ul li a .text {
		position: absolute;
		opacity: 0;
		color: #000;
		margin-top: 0px;
		font-weight: 800;
		font-size: 1em;
		letter-spacing: 0.1em;
		transition: 0.5s;
	}
	.navigation ul li.active a .text {
		transform: translateY(-14px);
		opacity: 1;
	}
	.indicator {
		position: absolute;
		top: 50%;
		width: 70px;
		height: 70px;
		background: #00ff0a;
		border-radius: 100%;
		border: 6px solid #fff;
		cursor: pointer;
		transition: 0.5s;
	}
	.indicator::before {
		content: '';
		position: absolute;
		top: 28px;
		left: -22px;
		width: 20px;
		height: 20px;
		border-top-right-radius: 20px;
		box-shadow: 4px -6px 0 0 #fff;
	}
	.indicator::after {
		content: '';
		position: absolute;
		top: 28px;
		right: -22px;
		width: 20px;
		height: 20px;
		border-top-left-radius: 20px;
		box-shadow: -4px -6px 0 0 #fff;
	}
	.navigation ul li:nth-child(2).active ~ .indicator {
		transform: translateX(calc(70px * 1));
	}
	.navigation ul li:nth-child(3).active ~ .indicator {
		transform: translateX(calc(70px * 2));
	}
	.navigation ul li:nth-child(4).active ~ .indicator {
		transform: translateX(calc(70px * 3));
	}
	.navigation ul li:nth-child(5).active ~ .indicator {
		transform: translateX(calc(70px * 4));
	}
</style>
