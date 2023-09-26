import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'
import { presetUno, presetIcons } from 'unocss'

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte], mode: 'svelte-scoped',
			presets: [
				presetUno(),
				presetIcons(),
			],
		}), sveltekit(),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
