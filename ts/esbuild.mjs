import esbuild from 'esbuild';
import esbuildSvelte from 'esbuild-svelte';
import * as fs from 'fs/promises';
import sveltePreprocess from 'svelte-preprocess';

const outdir = '../dist/web';

/** @type {import('esbuild').BuildOptions} */
const options = {
	entryPoints: ['src/index.ts'],
	bundle: true,
	mainFields: ['svelte', 'browser', 'module', 'main'],
	minify: true,
	sourcemap: true,
	// support Qt 5.14
	target: ['chrome77'],
	outdir,
	external: ['anki'],
	plugins: [
		esbuildSvelte({
			preprocess: sveltePreprocess({ scss: {} }),
			// https://github.com/EMH333/esbuild-svelte#css-output
			compilerOptions: { css: true }
		})
		// sassPlugin(),
	],
	loader: {
		'.png': 'dataurl',
		'.svg': 'text'
	}
};

if (process.env.WATCH === 'true') {
	options.watch = {
		onRebuild(error, result) {
			if (error) {
				console.error('watch build failed:', error);
			} else {
				console.log('watch build succeeded:', result);
			}
		}
	};
}

fs.rm(outdir, { recursive: true, force: true })
	.then(() => console.log(`successfully deleted ${outdir}`))
	.catch((error) => console.error('there was an error:', error.message));

esbuild
	.build(options)
	.then((result) => console.log('build succeeded:', result))
	.catch((error) => {
		process.stderr.write(error.stderr);
		process.exit(1);
	});
