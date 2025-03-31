import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Logo, Cover, Footer, People, Partners, Projects, About, Loader } from 'components'
import { useGlobalState } from 'contexts/GlobalState'
import { GoogleSpreadsheet } from 'google-spreadsheet'

import { googleServiceAccount } from 'utils/google-credentials'


const spreadsheetId = googleServiceAccount.spreadsheet_id
const clientEmail = googleServiceAccount.client_email
const privateKey = googleServiceAccount.private_key

function App() {
	const isMobile = useMediaQuery({ maxDeviceWidth: 767 })
	const [websiteText, setWebsiteText] = useGlobalState('websiteText')

	useEffect(() => {
		async function fetchMyAPI() {
			if (!spreadsheetId || !clientEmail || !privateKey) {
				console.error('Credenciais do Google não estão definidas corretamente')
				return
			}

			const doc = new GoogleSpreadsheet(spreadsheetId)

			try {
				await doc.useServiceAccountAuth({
					client_email: clientEmail,
					private_key: privateKey,
				})
				await doc.loadInfo()
				const sheet = doc.sheetsByIndex[0]
				const rows = await sheet.getRows({ offset: 0 })

				let textsFetched = {}
				rows.forEach((row) => {
					const sheetRow = {
						[row.id]: {
							pt: row.portuguese,
							en: row.english,
						},
					}
					textsFetched = { ...textsFetched, ...sheetRow }
				})

				setWebsiteText(textsFetched)
			} catch (error) {
				console.error('Erro ao carregar dados do Google Sheets:', error)
			}
		}
		fetchMyAPI()
	}, [])

	if (!websiteText) {
		return <Loader />
	}

	return (
		<>
			<Logo />
			<Cover isMobile={isMobile} />
			<About isMobile={isMobile} />
			<Projects />
			<People isMobile={isMobile} />
			<Partners />
			<Footer isMobile={isMobile} />
			<AccessibilityWidget />
		</>
	)
}

function AccessibilityWidget() {
	useEffect(() => {
		;(function (d) {
			var s = d.createElement('script')
			s.setAttribute('data-account', 'P2mDLuGnbV')
			s.setAttribute('src', 'https://cdn.userway.org/widget.js')
			;(d.body || d.head).appendChild(s)
		})(document)
	}, [])

	return <></>
}

export default App
