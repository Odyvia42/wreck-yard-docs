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
			customCss: ['./src/styles/custom.css'],
			locales: {
                root: { label: 'Русский', lang: 'ru' },
            },
			components: {
                TableOfContents: './src/components/TableOfContents.astro',
            },
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
			social: [
                { icon: 'github', label: 'Wreck Yard on GitHub', href: 'https://github.com/Odyvia42/wreck-yard-docs' },
            ],
		}),
	],
});
