import styled from 'styled-components'

const Img = styled.img`
	width: ${props => props.width};
	height: ${props => props.height};
	margin: ${props => props.margin};
	border-radius: ${props => props.borderRadius};
	display: ${({display}) => display};
	@media (max-width: 768px) {
		width: ${props => props.$mobileWidth};
		height: ${props => props.$mobileHeight};
	}
`
export default Img