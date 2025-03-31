import { useState } from 'react'
import Fade from 'react-reveal/Fade'

import { Button } from 'components'
import { Section } from 'components/Styled'
import { useGlobalState } from 'contexts/GlobalState'

export default function About({ isMobile }) {
	const [moreText, showMoreText] = useState(false)
	const [websiteText] = useGlobalState('websiteText')
	const [selectedLanguage] = useGlobalState('selectedLanguage')

	const paragraphStyle = {
		display: moreText ? 'inherit' : 'none',
		breakAfter: 'avoid'
	}

	// console.log(websiteText)

	return (
		<Section className='gradient flex flex-col justify-center items-center md:text-center mx-auto text-white bg-gray-900 py-20 px-5'>
			<Fade>
				<h2 className='container md:px-40 text-4xl pb-16 font-semibold max-w-6xl'>{websiteText.sobre_introducao[selectedLanguage]}</h2>
			</Fade>
			<div className='container md:px-40 pb-8 text-left'>
				<Fade delay={300}>
					<p>{websiteText.sobre_paragrafo_1[selectedLanguage]}</p>
				</Fade>
			</div>
			<Fade>
				<div className='container md:px-40 space-y-6 text-left' style={{ columnCount: isMobile ? 1 : 2, columnGap: '100px', minHeight: moreText ? '200px' : 'auto' }}>
					<p style={paragraphStyle}>{websiteText.sobre_paragrafo_2[selectedLanguage]}</p>
					<p style={paragraphStyle}>{websiteText.sobre_paragrafo_3[selectedLanguage]}</p>
					<p style={paragraphStyle}>{websiteText.sobre_paragrafo_4[selectedLanguage]}</p>
					<p style={paragraphStyle}>{websiteText.sobre_paragrafo_5[selectedLanguage]}</p>
					<p style={paragraphStyle}>{websiteText.sobre_paragrafo_6[selectedLanguage]}</p>
				</div>
			</Fade>
			<Fade delay={600}>
				<Button onClick={() => showMoreText(!moreText)} style={{ display: moreText && 'none' }} id='myBtn'>
					{websiteText.sobre_botao_leiamais[selectedLanguage]}
				</Button>
			</Fade>
		</Section>
	)
}

// // TEST
// const var1 = {
// 	test: ()=> console.log('Hello World'),
// }

// let { test } = var1

// test(test)

// const test3 = 'Hello World'

// let message = test3 + "World"

// function myFunction(param1) {
// 	return message
// }

// myFunction('hello')
// // TEST END
