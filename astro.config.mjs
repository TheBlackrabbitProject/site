// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Blackrabbit Project',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			pagination: false,
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' }
				},
				{
					label: 'Contribute',
					autogenerate: { directory: 'contribute' },
				},
				{
					label: 'Fangames',
					autogenerate: { directory: 'fangames' },
				}
			],
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/font-face.css',
				'./src/styles/custom.css'
			  ],
		}),
	],
});
