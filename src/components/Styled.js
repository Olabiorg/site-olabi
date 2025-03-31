import { styled } from 'stitches.config'

const Section = styled('section', {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'start',
	'@bp2': {
		flexDirection: 'column',
	},
	variants: {
		height: {
			full: {
				height: '100vh',
			},
		},
	},
})

const SmallPart = styled('div', {
	flexBasis: '33%',
})

const LargePart = styled('div', {
	flex: 1,
	flexGrow: 1,
	flexShrink: 1,
	flexBasis: '0%',
	overflow: 'auto',
})

const ProjectCardWrapper = styled('div', {
	width: '300px',
	flexGrow: 0,
	flexShrink: 0,
	flexBasis: 'auto',
	'.btn-apoie': {
		opacity: '0',
	},
	'&:hover': {
		'button': {
			opacity: '1',
		}
	},
	'@bp2': {
		'.btn-apoie': {
			opacity: '1',
		}
	},
})

const ProjectContainer = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	flexGrow: 1,
	flexShrink: 1,
	flexBasis: '0%',
	overflow: 'auto',
})

export { Section, SmallPart, LargePart, ProjectCardWrapper, ProjectContainer }