import { LargePart, Section, SmallPart } from 'components/Styled';
import { useGlobalState } from 'contexts/GlobalState';

const supportLogos = [
	"ford",
	"opensociety",
	// 'googleorg',
	// 'confluentes',
	// 'brazilfoundation',
];

const partnerLogos = [
	"oifuturo",
	"globonews",
	"thoughtworks",
	"sesc",
	"aerolito",
	"globosat",
	"b2w",
	"datalabe",
	"transparenciabrasil",
	"serrapilheira",
	"museudoamanha",
	"boll",
	"its",
	"colaboramerica",
	"wowfestival",
	"int",
	"flup",
	"artigo19",
	"cultne",
	"minasprogramam",
	"institutoupdate",
	"microsoft",
	"selina",
	"ame",
];

export default function Partners() {
	const [websiteText] = useGlobalState("websiteText");
	const [selectedLanguage] = useGlobalState("selectedLanguage");

	return (
		<Section className='py-20' style={{ backgroundColor: "#cc1c56" }}>
			<SmallPart className='pl-5'>
				<p className='text-sm text-white opacity-40'>
					{websiteText.apoiadores_titulo[selectedLanguage]}
				</p>
				<div className="flex flex-row flex-wrap space-y-12">
					<div></div>
					{supportLogos.map((logo) => (
						<div key={logo}>
							<img
								className='object-cover h-auto mr-10 md:w-40 w-36'
								src={`/assets/l-${logo}.png`}
							/>
						</div>
					))}
				</div>
			</SmallPart>
			<LargePart className='pt-20 pl-5 md:pl-10 md:pt-0'>
				<p className='text-sm text-white opacity-40'>
					{websiteText.parceiros_titulo[selectedLanguage]}
				</p>
				<div className="flex flex-row flex-wrap space-y-12">
					<div></div>
					{partnerLogos.map((logo) => (
						<div key={logo}>
							<img
								className='object-cover w-20 h-auto mr-10'
								src={`/assets/l-${logo}.png`}
							/>
						</div>
					))}
				</div>
			</LargePart>
		</Section>
	);
}
