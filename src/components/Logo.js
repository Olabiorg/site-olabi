import { FaInstagram, FaFacebook, FaFlickr, FaMedium } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { useGlobalState } from 'contexts/GlobalState'

export default function Logo() {
	const [selectedLanguage, setSelectedLanguage] = useGlobalState('selectedLanguage')
	const [availableLanguages] = useGlobalState('availableLanguages')

	return (
		<Fade>
			<div style={{ backgroundColor: '#cc1c56', opacity: '1' }} className='fixed p-3 w-full z-10 shadow-2xl flex flex-row justify-between px-4 items-center'>
				<a href="#">
					<img className='h-12 top-5 left-5' src="/assets/l-olabi.png" alt="Olabi Logo" />
				</a>
				<div className='social-logos flex justify-between items-center space-x-3 mr-2 pb-0.5' style={{ height: '35px' }}>
					<a href="https://www.instagram.com/olabiorg/" target="_blank" rel="noopener noreferrer"><FaInstagram size='18' color='white' /></a>
					<a href="https://www.facebook.com/olabimakerspace/" target="_blank" rel="noopener noreferrer"><FaFacebook size='18' color='white' /></a>
					<a href="https://www.flickr.com/photos/126274132@N03/albums" target="_blank" rel="noopener noreferrer"><FaFlickr size='18' color='white' /></a>
					<a href="https://olabimakerspace.medium.com/" target="_blank" rel="noopener noreferrer"><FaMedium size='18' color='white' /></a>
					<button
						className='text-xs font-bold'
						style={{
							marginLeft: '15px',
							color: 'white',
							height: '35px',
							width: '35px',
							paddingTop: '1px',
							border: '2px solid #FFFFFF30',
							borderRadius: '5px'
						}}
						onClick={() => setSelectedLanguage(selectedLanguage === availableLanguages[0] ? availableLanguages[1] : availableLanguages[0])}>
						{selectedLanguage.toUpperCase()}
					</button>
				</div>
			</div>
		</Fade>
	)
}
