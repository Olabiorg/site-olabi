export default function Loader() {
	return (
		<div style={{
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100vw',
			height: '100vh',
			backgroundColor: '#cc1c56',
			color: 'white',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}}>
			<img src="loader.gif" alt="" srcset="" />
		</div>
	)
}