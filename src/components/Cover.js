import VideoCover from 'react-video-cover'
import FadeIn from 'react-fade-in'
import Fade from 'react-reveal/Fade'
import { Section, SmallPart, LargePart } from 'components/Styled'
import { useGlobalState } from 'contexts/GlobalState'

export default function Cover({ isMobile }) {
    const [websiteText] = useGlobalState('websiteText')
    const [selectedLanguage] = useGlobalState('selectedLanguage')

    return (
        <Section height={isMobile ? '' : 'full'} style={{ minHeight: '800px' }} className=''>
            <SmallPart style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f5f5f5' }}>
                <div></div>
                <div className='py-10 pl-5 pr-10'>
                    <Fade>
                        <h1 id='cover_text' className='text-6xl pr-18 mb-10 pt-20 md:pt-13 md:text-7xl font-semibold' style={{ maxWidth: '400px' }}>
                            {/* Por um futuro em que caibam <span style={{ color: '#cc1c56' }}>todos</span>. */}
                            {websiteText.capa_titulo[selectedLanguage]}
                        </h1>
                    </Fade>
                    <Fade delay={200}>
                        <p className='pr-5 max-w-md'>{websiteText.capa_subtitulo[selectedLanguage]}</p>
                    </Fade>
                </div>
                <Fade top delay={400}>
                    <div className='pb-10 px-5'>↓</div>
                </Fade>
            </SmallPart>
            <LargePart>
                <VideoCover
                    videoOptions={{
                        src: 'assets/video.mp4',
                        playsInline: true,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                    }}
                />
            </LargePart>
        </Section>
    )
}
