// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Odyvia42.github.io',
    base: '/wreck-yard-docs',
	integrations: [
		starlight({
			title: 'Энциклопедия Wreck Yard',
			sidebar: [
				{ label: 'О проекте', slug: 'about' },
				{					
					label: 'Leyland',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Leyland P76 1973-1976', slug: 'leyland/leyland-p76-1973-1976' },
					],
				},				
			],
		}),
	],
});
