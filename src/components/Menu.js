import { useGlobalState } from 'contexts/GlobalState'

export default function Menu() {
	const [menuIsOpen] = useGlobalState('menuIsOpen')

	return <div style={{ display: menuIsOpen ? 'block' : 'none' }}>MENU!</div>
}
