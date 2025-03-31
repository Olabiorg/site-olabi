import { createGlobalState } from 'react-hooks-global-state'

const initialGlobalState = {
	websiteText: null,
	selectedProjectType: 'ANDAMENTO',
	selectedTeamMember: 'equipe_gabiagustini',
	menuIsOpen: false,
	selectedLanguage: 'pt',
	availableLanguages: ['pt', 'en'],
}

export const { useGlobalState } = createGlobalState(initialGlobalState)
