import { createCss } from '@stitches/react'

export const { styled, css, global, keyframes } = createCss({
	theme: {},
	media: {
		bp1: '(max-width: 1024px)',
		bp2: '(max-width: 768px)',
	},
	utils: {},
	prefix: '',
	insertionMethod: 'append | prepend ',
	themeMap: '',
})
