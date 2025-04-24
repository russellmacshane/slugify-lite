import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

export const slugify = (text) =>
	text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
		.replace(/\s+/g, '-') // collapse whitespace and replace by -
		.replace(/-+/g, '-'); // collapse dashes

export const version = () => pkg.version;
