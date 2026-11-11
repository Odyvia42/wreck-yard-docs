// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://Odyvia42.github.io',
    base: '/wreck-yard-docs',
	integrations: [
		starlight({
			title: 'Wreck Yard Docs',			
			sidebar: [
				{ label: 'О проекте', slug: 'about' },
				{					
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
