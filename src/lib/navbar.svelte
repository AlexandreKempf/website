<script>
	import { active_page } from '$lib/store.js';
</script>

<div class="navigation">
	<ul>
		<li
			class="list {$active_page == 'profile' ? 'active' : ''}"
			on:click={() => ($active_page = 'profile')}
			on:keydown={() => ($active_page = 'profile')}
		>
			<a href="#!" class="text-white">
				<span class="icon">
					<div class="i-iconoir-user" />
				</span>
				<span class="text">Profile</span>
			</a>
		</li>
		<li
			class="list {$active_page == 'code' ? 'active' : ''}"
			on:click={() => ($active_page = 'code')}
			on:keydown={() => ($active_page = 'code')}
		>
			<a href="#!">
				<span class="icon">
					<div class="i-iconoir-code" />
				</span>
				<span class="text">Code</span>
			</a>
		</li>

		<li
			class="list {$active_page == 'home' ? 'active' : ''}"
			on:click={() => ($active_page = 'home')}
			on:keydown={() => ($active_page = 'home')}
		>
			<a href="#!">
				<span class="icon">
					<div class="i-iconoir-home-alt" />
				</span>
				<span class="text">Home</span>
			</a>
		</li>
		<li
			class="list {$active_page == 'photos' ? 'active' : ''}"
			on:click={() => ($active_page = 'photos')}
			on:keydown={() => ($active_page = 'photos')}
		>
			<a href="#!">
				<span class="icon">
					<div class="i-iconoir-camera" />
				</span>
				<span class="text">Photos</span>
			</a>
		</li>

		<li
			class="list {$active_page == 'contact' ? 'active' : ''}"
			on:click={() => ($active_page = 'contact')}
			on:keydown={() => ($active_page = 'contact')}
		>
			<a href="#!">
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
		--clr: #1b2735;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'VT323', sans-serif;
	}
	.navigation {
		width: 400px;
		height: 70px;
		background: #000;
		position: relative;
		display: flex;
		justify-content: center;
		z-index: 1;
		border-radius: 10px;
		margin: 0px auto;
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
		margin-top: 17px;
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
		font-weight: 500;
	}
	.navigation ul li a .icon {
		position: relative;
		display: block;
		line-height: 75px;
		font-size: 2em;
		text-align: center;
		transition: 0.5s;
		color: #fff;
	}
	.navigation ul li.active a .icon {
		transform: translateY(-32px);
	}
	.navigation ul li a .text {
		position: absolute;
		transform: translateY(20px);
		opacity: 0;
		color: #fff;
		margin-top: 20px;
		font-weight: 600;
		font-size: 1.3em;
		letter-spacing: 0.1em;
		transition: 0.5s;
	}
	.navigation ul li.active a .text {
		transform: translateY(10px);
		opacity: 1;
	}
	.indicator {
		position: absolute;
		top: -50%;
		width: 70px;
		height: 70px;
		background: #0e9c2b;
		border-radius: 100%;
		border: 6px solid var(--clr);
		cursor: pointer;
		transition: 0.5s;
	}
	.indicator::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -22px;
		width: 20px;
		height: 20px;
		border-top-right-radius: 20px;
		box-shadow: 1px -10px 0 0 var(--clr);
	}
	.indicator::after {
		content: '';
		position: absolute;
		top: 50%;
		right: -22px;
		width: 20px;
		height: 20px;
		border-top-left-radius: 20px;
		box-shadow: -1px -10px 0 0 var(--clr);
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
