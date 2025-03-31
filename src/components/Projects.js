import Fade from 'react-reveal/Fade'

import { useGlobalState } from '../contexts/GlobalState'
import { Button } from './index.js'
import { LargePart, ProjectCardWrapper, ProjectContainer, Section, SmallPart } from './Styled'

export default function Projects() {
	const [selectedProjectType, setSelectedProjectType] = useGlobalState('selectedProjectType')
	const [websiteText] = useGlobalState('websiteText')
	const [selectedLanguage] = useGlobalState('selectedLanguage')

	return (
		<Section style={{ transition: 'all 300ms' }} className={`py-20 text-white bg-black ${selectedProjectType === 'ANDAMENTO' ? 'state-1' : 'state-2'}`}>
			<SmallPart
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between'
				}}>
				<div className='pl-5 pr-12'>
					<h1 className='mb-10 text-4xl font-semibold'>{websiteText.projetos_titulo[selectedLanguage]}</h1>
					<p>{websiteText.projetos_subtitulo[selectedLanguage]}</p>
					<div className='flex flex-row flex-none py-8 space-x-3 overflow-auto md:py-0 mt-9'>
						<Button onClick={() => setSelectedProjectType('ANDAMENTO')}>{websiteText.projetos_botao_andamento[selectedLanguage]}</Button>
						<Button onClick={() => setSelectedProjectType('ARQUIVO')}>{websiteText.projetos_botao_arquivo[selectedLanguage]}</Button>
					</div>
				</div>
				<div></div>
			</SmallPart>
			<LargePart className='md:pl-10'>
				{/* <div className='flex flex-row flex-none py-8 pl-5 space-x-3 overflow-auto md:py-0'>
					<Button onClick={() => setSelectedProjectType('ANDAMENTO')}>Em Andamento</Button>
					<Button onClick={() => setSelectedProjectType('ARQUIVO')}>Arquivo Olabi</Button>
				</div> */}
				<Fade>
					<ProjectContainer className='pb-12 pl-5'>
						<ProjectCard type='ANDAMENTO' projectTitle='pretalab' title='PretaLab' since='2017' description='A necessidade de diversificar a cena tecnológica trazendo um recorte de gênero e raça é o tema deste projeto, que nasceu em 2017 como uma rede de mulheres negras na tecnologia e hoje possui um braço de formação educacional e outro de consultoria de diversidade para empresas. A Pretalab conta ainda com uma ferramenta de perfis de mulheres negras na tecnologia, uma espécie de banco de talentos que apresenta mulheres potentes do nosso país.' />
						{/* New Projects */}
						<ProjectCard type='ANDAMENTO' projectTitle='transborda60' since='2024' />
						<ProjectCard type='ANDAMENTO' projectTitle='ciclopoderdofuturo' since='2022' />
						<ProjectCard type='ANDAMENTO' projectTitle='cicloemtecnologia' since='2022' />
						<ProjectCard type='ANDAMENTO' projectTitle='cursociberativismo' since='2022' />
						<ProjectCard type='ANDAMENTO' projectTitle='codigosnegros3aedicao' since='2022' />
						{/* New Projects End */}
						<ProjectCard type='ANDAMENTO' projectTitle='aprenda' title='Aprenda Com Uma Avó' since='2020' description='Criado em 2020, a plataforma digital conecta pessoas mais velhas que queiram transmitir conhecimentos por meio de ferramentas digitais em aulas online. Nesse processo de montar seus conteúdos, os avós aprendem mais sobre as novas tecnologias ampliando o seu letramento digital. As aulas, por sua vez, são abertas e têm engajado um público amplo, promovendo um encontro de gerações, valorizando os saberes acumulados em nossa sociedade e refletindo sobre o envelhecimento da população.' />
						<ProjectCard type='ARQUIVO' projectTitle='bloco' title='BLOCO' since='2016' description='Um lugar para quem quer questionar, aprender, conversar e experimentar, em que mentes, mãos, ideias, talentos e culturas de todos os tipos se encontram. O Bloco é nosso braço que promove encontros, a partir de curadoria de conteúdos, eventos e diálogos que furam bolhas e conectam ciência, arte, tecnologia e direitos humanos.' />
						<ProjectCard type='ARQUIVO' projectTitle='protegebr' title='ProtegeBR' since='2020' description='Ação emergencial surgida no início da pandemia do novo coronavírus, a plataforma digital surgiu para impulsionar a produção de equipamentos de proteção individual (EPI) e outros suprimentos médicos que estavam em falta nos hospitais e passaram a ser produzidos Brasil afora por universidades, makerspaces, ONGs. Conectar os grupos produtores, disponibilizar contatos, projetos abertos e normas técnicas são as atividades a que o projeto se dedica.' />
						<ProjectCard type='ARQUIVO' projectTitle='compsemcao' title='Computação sem Caô' since='2019' description='Projeto que democratiza o ensino do pensamento computacional, como forma de aumentar o interesse pelas carreiras técnicas no Brasil. A partir de um canal no Youtube e uma conta no Instagram, 21 vídeos de até 03 minutos explicam de maneira didática e interessante como funcionam algoritmos, o que está por trás de aplicações tecnológicas comuns no nosso dia a dia e explora conceitos da ciência da computação. O projeto foi gravado em 2019, mas os conteúdos são atemporais e seguem disponíveis gratuitamente. Apoiado pelo Instituto Serrapilheira (ganhando do edital Serrapilheira Camp 2018)' />
						<ProjectCard type='ARQUIVO' projectTitle='codigosnegros' title='Códigos Negros' since='0000' description='Evento realizado em novembro de 2019 na sede do Olabi com o objetivo de dar visibilidade aos pensamentos de pessoas negras atuantes nos campos da arte, tecnologia e comunicação. A programação contou com a presença de Tarcízio Silva, Maria Rita Casagrande, Yhuri Cruz e Jess Oliveira em painéis que discutiram racismo algorítmico nas transformações que pautam o futuro , posicionamento de marca e influenciadores negros e arte atlântica:tradução e traição na arte negra contemporânia. A realização contou com o apoio da Globosat.' />
						<ProjectCard type='ARQUIVO' projectTitle='festivaloifuturo' title='Festival Oi Futuro' since='2016' description='Evento digital do Instituto Oi Futuro com foco em discutir o futuro que reuniu em julho de 2020 artistas, cientistas, pesquisadores e líderes corporativos em torno de temas como futuro do trabalho, transformação digital, ética e humanidade na inteligência artificial, diversidade organizacional e ciências. A curadoria foi feita pelo Olabi, que também moderou e conduziu as sete horas de conversas, que seguem disponíveis no Youtube.' />
						<ProjectCard type='ARQUIVO' projectTitle='conversecomoutrasideias' title='ConverseCom OutrasIdeias' since='0000' description='Evento digital da GloboNews que trouxe diálogos sobre o momento da pandemia e futuro do país, que ocorreu em outubro de 2020 nos canais digitais da emissora. O Olabi, junto com o Museu do Amanhã e a equipe do canal, assinou a curadoria que trouxe temas ligados à educação, futuro do trabalho, sustentabilidade e justiça social. As 20 horas de conversa estão disponíveis no Youtube' />
						<ProjectCard type='ARQUIVO' projectTitle='pretapode' title='PretaPod(e)' since='2020' description='Série de podcast feita pela Pretalab em parceria com a FLUP e Rádio Escada. Em 06 horas de conteúdo distribuídas gratuitamente em maio de 2020, mulheres negras protagonistas no campo das artes, em especial literatura, compartilham seus trabalhos e visões de mundo, mostrando as suas potências.' />
						<ProjectCard type='ARQUIVO' projectTitle='maissessenta' title='60+ Arte e Tecnologia' since='2018' description='Em 2018, o Olabi criou em parceria com a Baluarte Cultura um ciclo para pessoas acima de sessenta anos aprenderem sobre novas tecnologias e técnicas manuais, mostrando o intercâmbio possível entre saberes. A primeira edição do projeto foi realizada na Central Única de Favelas (CUFA) e atendeu 40 pessoas no bairro de Madureira, no Rio de Janeiro. A segunda edição em 2019 foi realizada em parceria com o Data_Labe na favela da Maré, também no Rio. Cada ciclo teve cerca de 60 horas de atividades presenciais, que (...)' />
						<ProjectCard type='ARQUIVO' projectTitle='makerspacepopup' title='Makerspace Pop Up' since='2017' description='O Olabi já produziu espaços de fazer em diversos eventos, criando a estratégia, programação, metodologia e produzindo as atividades ligadas a novas tecnologias e técnicas manuais. Em 2017 e 2018, coordenamos os makerspaces do evento internacional Colaboramerica, trazendo pessoas relevantes da cena global para liderar oficinas e ensinar técnicas ligada a fabricação digital, reciclagem, conserto, design e produção em baixa escala. Em 2018, lideramos um makerspace no WOW, Festival Mulheres do Mundo. (...)' />
						<ProjectCard type='ARQUIVO' projectTitle='minasdedados' title='Minas de Dados' since='2018' description='Em 2018 realizamos, em parceria com a Transparência Brasil e o Data_Labe, a formação em transparência pública e tecnologia' />
						<div style={{ width: '30px' }}></div>
					</ProjectContainer>
				</Fade>
			</LargePart>
		</Section>
	)
}

function ProjectCard({ title, description, type, projectTitle, since = '2018' }) {
	const [selectedProjectType] = useGlobalState('selectedProjectType')
	const [websiteText] = useGlobalState('websiteText')
	const [selectedLanguage] = useGlobalState('selectedLanguage')
	// console.log(websiteText)
	return (
		<ProjectCardWrapper className='mr-6' style={{ display: type === selectedProjectType ? 'block' : 'none' }}>
			<div className='relative'>
				<img alt='decoration' src={`/assets/project-${projectTitle}.jpg`} className='object-cover rounded-lg shadow-lg' style={{ width: '100%', height: '150px', backgroundColor: 'blue' }} />
				<div className='absolute top-3 right-3'>
					{websiteText[`projetos_${projectTitle}_link`] !== undefined ? (
						<a target='_blank' href={websiteText[`projetos_${projectTitle}_link`]['pt']} rel='noopener noreferrer'>
							<Button className='w-12 h-12 font-bold btn-apoie text-md'>↗</Button>
						</a>
					) : null}
				</div>
			</div>
			<div className='flex items-center justify-between'>
				<h3 className='pr-10 mt-6 mb-1 text-2xl font-bold'>{websiteText[`projetos_${projectTitle}_titulo`][selectedLanguage]}</h3>
			</div>
			{/* <div className="mr-2 text-sm opacity-50 text-white-300">{`Desde ${since}`}</div> */}
			{/* <div className="mr-2 text-sm opacity-50 text-white-300">{`Projeto autoral com o apoio de`}</div> */}
			<p className='mt-4'>{websiteText[`projetos_${projectTitle}_texto`][selectedLanguage]}</p>
		</ProjectCardWrapper>
	)
}
