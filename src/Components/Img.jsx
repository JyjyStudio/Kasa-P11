import styled from 'styled-components'

const Img = styled.img`
	width: ${props => props.width};
	height: ${props => props.height};
	margin: ${props => props.margin};
	border-radius: ${props => props.borderRadius};
	display: ${({display}) => display};
	filter: ${({filter}) => filter};
	object-fit: ${({cover}) => cover ? "cover" : ""};
	`
export default Img
