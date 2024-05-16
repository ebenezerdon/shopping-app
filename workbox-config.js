module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,css,html,js,json,md}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'sw.js'
};
