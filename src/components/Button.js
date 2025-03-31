import { styled } from 'stitches.config'

const Button = styled('button', {
	border: '1px solid #FFFFFF50',
	borderRadius: '9999px',
	fontSize: '14px',
	padding: '10px 15px',
	transition: 'all 300ms',
	backgroundColor: '#FFFFFF13',
	backdropFilter: 'blur(15px)',
	'&:hover': {
		backgroundColor: '#6a2dad'
	}
})

// function ButtonTemp() {
// 	return (
// 		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
// 			Button
// 		</button>
// 	)
// }

export default Button
