import { useEffect } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

import { LargePart, Section, SmallPart } from 'components/Styled'
// import FadeIn from 'react-fade-in'
import { useGlobalState } from 'contexts/GlobalState'

export default function People({ isMobile }) {
	const [websiteText] = useGlobalState('websiteText')
	const [selectedLanguage] = useGlobalState('selectedLanguage')

	return (
		<Section className='min-h-screen'>
			<SmallPart>
				{!isMobile && (
					<div
						style={{
							position: 'relative',
							width: '100%',
							height: '100%',
							backgroundColor: 'transparent'
						}}>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
						<b></b>
					</div>
				)}
			</SmallPart>
			<LargePart className='flex flex-col pt-3 pb-32 md:pl-10' style={{ backgroundColor: 'white', color: 'black' }}>
				<div className='flex flex-row flex-none py-5 pb-10 pl-5 pr-10 mb-3 overflow-auto'>
					<div className='flex flex-row items-center flex-none space-x-3'>
						<p className='text-sm text-gray-500'>{websiteText.conselho_titulo[selectedLanguage]}</p>
						<Avatar imgName='conselho_elianecosta' />
						<Avatar imgName='conselho_ricardoabramovay' />
						<Avatar imgName='conselho_yasminthayna' />
						<Avatar imgName='conselho_winniesantos' />
						<Avatar imgName='conselho_ligiabatista' />
					</div>
					<div className='flex flex-row items-center flex-none pl-10 space-x-3'>
						<p className='text-sm text-gray-500'>{websiteText.equipe_titulo[selectedLanguage]}</p>
						<Avatar imgName='equipe_gabiagustini' />
						<Avatar imgName='equipe_silvanabahia' />
						<Avatar imgName='equipe_robertahelcias' />
						<Avatar imgName='equipe_rodrigoschmitt' />
						<Avatar imgName='equipe_claraqueiroz' />
						<Avatar imgName='equipe_danielevalente' />
						<Avatar imgName='equipe_gysselemendes' />
						<Avatar imgName='equipe_davisantos' />
						<Avatar imgName='equipe_deborahferreira' />
						<Avatar imgName='equipe_joaooliveira' />
						<Avatar imgName='equipe_joycesantos' />
						<Avatar imgName='equipe_verafelix' />
					</div>
					<div className='flex flex-row items-center flex-none pl-10 mr-10 space-x-3'>
						<p className='text-sm text-gray-500'>{websiteText.conselhofiscal_titulo[selectedLanguage]}</p>
						<Avatar imgName='conselhofiscal_carolalthaller' />
						<Avatar imgName='conselhofiscal_fabiosteibel' />
						<Avatar imgName='conselhofiscal_guilhermelito' />
						<div style={{ width: '30px' }}></div>
					</div>
				</div>
				<Profile isMobile={isMobile} active={true} />
			</LargePart>
		</Section>
	)
}

function Profile({ isMobile }) {
	const [websiteText] = useGlobalState('websiteText')
	const [selectedLanguage] = useGlobalState('selectedLanguage')
	const [selectedTeamMember] = useGlobalState('selectedTeamMember')

	useEffect(() => {
		// console.log({ selectedTeamMember })
		// console.log({ websiteText })
	}, [selectedTeamMember, selectedLanguage])

	return (
		<div className='pl-5 mt-5 space-y-3 md:mt-10'>
			<Avatar isMedium imgName={selectedTeamMember} />

			<h2 className='mt-1 text-4xl font-bold'>{websiteText[`${selectedTeamMember}_nome`]['pt']}</h2>

			{selectedTeamMember.split('_')[0] === 'equipe' && (
				<p className='py-2 text-sm text-gray-500' style={{ color: '' }}>
					{websiteText[`${selectedTeamMember}_cargo`][selectedLanguage]}
				</p>
			)}

			<div style={{ columnCount: isMobile ? 1 : 1 }}>
				<p className='max-w-2xl pr-20'>{websiteText[`${selectedTeamMember}_bio`][selectedLanguage]}</p>
				{websiteText[`${selectedTeamMember}_linkedin`]['pt'] !== undefined ? (
					<a href={websiteText[`${selectedTeamMember}_linkedin`]['pt']} target='_blank' rel='noopener noreferrer' className='inline-block mt-5 hover:opacity-40'>
						<FaLinkedin size='30' color='Crimson' />
					</a>
				) : null}
				{websiteText[`${selectedTeamMember}_instagram`]['pt'] !== undefined ? (
					<a href={websiteText[`${selectedTeamMember}_instagram`]['pt']} target='_blank' rel='noopener noreferrer' className='inline-block mt-5 mr-3 hover:opacity-40'>
						<FaInstagram size='30' color='Crimson' />
					</a>
				) : null}
			</div>
		</div>
	)
}

function Avatar({ imgName, isMedium }) {
	const [selectedTeamMember, setSelectedTeamMember] = useGlobalState('selectedTeamMember')

	useEffect(() => {}, [selectedTeamMember, setSelectedTeamMember])

	return (
		<img
			onClick={() => {
				setSelectedTeamMember(imgName)
			}}
			style={{
				cursor: 'pointer',
				opacity: selectedTeamMember === imgName ? 1 : 0.5,
				border: selectedTeamMember === imgName ? '4px solid crimson' : '0px solid crimson',
				transition: 'all 100ms ease'
			}}
			alt='decoration'
			src={`/assets/profilepic-${imgName.split('_')[1]}.jpg`}
			className={`flex items-center justify-center flex-none object-cover object-center bg-purple-500 rounded-full ${isMedium ? 'w-24 h-24' : 'w-14 h-14'}`}
		/>
	)
}
