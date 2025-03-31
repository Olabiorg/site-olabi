import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Section, SmallPart, LargePart } from 'components/Styled'
import { Button } from 'components'
import { useGlobalState } from 'contexts/GlobalState'

const { GoogleSpreadsheet } = require('google-spreadsheet')

export default function Footer({ isMobile }) {
	const [websiteText] = useGlobalState('websiteText')
	const [selectedLanguage] = useGlobalState('selectedLanguage')

	return (
		<>
			<Section className='py-12 pl-5 footer bg-gray'>
				<SmallPart style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
					<div className='pr-12'>
						<h1 className='text-4xl mb-14 font-semibold'>{websiteText.saiunamidia_titulo[selectedLanguage]}</h1>
					</div>
				</SmallPart>

				<LargePart className='flex flex-col md:flex-row md:pl-10 md:justify-between md:pr-80 space-y-8 md:space-y-0 items-stretch'>
					<div className='space-y-12' style={{ columnCount: isMobile ? 1 : 2, columnGap: 20, flex: 1 }}>
						{[1, 2, 3, 4].map((i) => (
							<div key={i}>
								<a
									href={websiteText[`artigo_${i}_link`]['pt']}
									target='_blank'
									className='text-lg font-bold block hover:opacity-60'
									rel='noopener noreferrer'
								>
									{`${websiteText[`artigo_${i}_titulo`]['pt']} ↗`}
								</a>
								<span className='text-gray-400 text-sm'>
									{`${websiteText[`artigo_${i}_veiculo`]['pt']} — ${websiteText[`artigo_${i}_data`]['pt']}`}
								</span>
							</div>
						))}
					</div>
				</LargePart>
			</Section>

			<Form />

			<Section className='py-12 pl-5 footer bg-gray-900 text-white'>
				<SmallPart>
					<h5 className='opacity-70 pb-8'>{websiteText.assinatura_texto[selectedLanguage]}</h5>
				</SmallPart>

				<LargePart className='footer_links flex flex-col md:flex-row md:pl-10 md:justify-between md:pr-80 space-x-8 md:space-y-0 items-stretch'>
					<div className='space-y-12' style={{ flex: 1 }}>
						<div>
							<h5 className='opacity-70'>{websiteText.contato_texto[selectedLanguage]}</h5>
							<a href='mailto:comunidade@olabi.org.br' className='text-lg font-bold hover:opacity-60 text-blue-300'>
								comunidade@olabi.org.br ↗
							</a>
						</div>
						<div>
							<h5 className='opacity-70'>{websiteText.links_texto[selectedLanguage]}</h5>
							<div className='footer_list space-y-2' style={{ columnCount: 2, columnGap: 20 }}>
								{[
									['https://www.pretalab.com/', 'PretaLab'],
									['https://www.aprendacomumaavo.com.br/', 'Aprenda Com Uma Avó'],
									['https://www.bloco.cc/', 'BLOCO'],
									['https://protegebr.olabi.org.br/', 'ProtegeBR'],
									['https://www.computacaosemcao.com.br', 'Computação Sem Caô'],
									['https://oifuturo.org.br/evento/festival-oi-futuro/', 'Festival Oi Futuro'],
									['https://www.pretalab.com/pretapode', 'PretaPod(e)'],
									['https://www.maissessenta.com.br/', '60+ Arte e Tecnologia'],
								].map(([href, text]) => (
									<a key={href} target='_blank' className='hover:opacity-60 text-blue-300' href={href} rel='noopener noreferrer'>
										{text} ↗
									</a>
								))}
								{[
									'Códigos Negros',
									'ConverseComOutrasIdeias',
									'Makerspace Pop Up',
									'Minas de Dados',
									'Pequenos Inventores',
									'Hack The Brain',
									'Remakers',
									'Sul-Sul',
									'Ciência Cidadã',
									'Rodada Hacker',
									'Inovação Distribuída e\nAtivismo no Brasil',
									'Gambiarra Favela Tech',
								].map((text) => (
									<p key={text}>{text}</p>
								))}
							</div>
						</div>
					</div>
				</LargePart>
			</Section>

			<div id='intro' className='section-cc footer'>
				<div className='content-wrapper'>
					<div>
						<img
							src='https://assets-global.website-files.com/5b05e2e1bfcfaa4f92e2ac3a/5b351ba83607a317df5b639b_cc.logo.white%20(1).svg'
							width='121'
							alt='CC Logo'
							className='image-12'
						/>
						<h5>{websiteText.creativecommons_texto[selectedLanguage]}</h5>
					</div>
				</div>
			</div>
		</>
	)
}

const Form = () => {
	const [websiteText] = useGlobalState('websiteText')
	const [selectedLanguage] = useGlobalState('selectedLanguage')
	const { register, handleSubmit } = useForm()
	const [email, setEmail] = useState('')
	const [formSubmitted, setFormSubmitted] = useState(false)

	const doc = new GoogleSpreadsheet(process.env.REACT_APP_NEWSLETTER_SPREADSHEET_ID)

	const onSubmit = async ({ email }) => {
		try {
			await doc.useServiceAccountAuth({
				client_email: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
				private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
			})
			await doc.loadInfo()
			const sheet = doc.sheetsByIndex[0]
			await sheet.addRow({ email })
			setFormSubmitted(true)
		} catch (error) {
			console.error('Erro ao enviar email:', error)
		}
	}

	return (
		<Section className='py-12 pl-5 bg-gray-800 text-white'>
			<SmallPart style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
				<div className='pr-12'>
					<h1 className='text-4xl mb-10 font-semibold'>Newsletter</h1>
				</div>
			</SmallPart>

			<LargePart className='flex flex-col md:pl-10 md:justify-between md:pr-80 space-y-4 items-stretch'>
				<p className='max-w-sm'>
					{!formSubmitted ? websiteText.newsletter_texto[selectedLanguage] : <span className='text-lg font-bold block'>Seu email foi inscrito com sucesso</span>}
				</p>
				{!formSubmitted && (
					<form style={{ flex: 1 }} onSubmit={handleSubmit(onSubmit)}>
						<input
							ref={register}
							className='newsletter-input rounded-md'
							placeholder='digite seu email'
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							required
						/>
						<Button className='button contact' type='submit'>
							enviar
						</Button>
					</form>
				)}
			</LargePart>
		</Section>
	)
}
