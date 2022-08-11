import { useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import colors from '../utils/colors'
import Img from './Img'
import DropdownIcon from '../assets/dropdown-arrow.svg'

export default function Dropdown({ width, txt, content, center }) {
	
	const [isOpen, setIsOpen] = useState(false)

	const icon = useRef(null)

	const toggleDropdown = () => {
		// si isOpen est true on le met a false et inversement
		setIsOpen(!isOpen)
		// et on ajoute une classe a l'élément pour gerer l'animation d'ouverture/fermeture du dropdown
		icon.current.setAttribute(
			'class',
			`${isOpen ? 'close-dropdown-icon' : 'open-dropdown-icon'}`
		)
	}

	return (
		<DropdownContainer width={width} center={center}>
			<DropdownBtn
				style={{ borderRadius: isOpen ? '0.5rem 0.5rem 0 0' : '.5rem' }}
				onClick={toggleDropdown}
			>
				<BtnLabel>{txt}</BtnLabel>
				<Img
					ref={icon}
					src={isOpen ? DropdownIcon : DropdownIcon}
					alt={isOpen ? 'Open Dropdown Icon' : 'Close Dropdown Icon'}
				/>
			</DropdownBtn>
			<div className={isOpen
				? 'openned-dropdown-content'
				: 'closed-dropdown-content'
			}>
				 {/* si le contenu est un tableau on affiche une liste */}
				{Array.isArray(content) ? (
					<ArrayContainer>
						{content.map((content, index) => (
							<li key={`${index}-${content}`}>{content}</li>
						))}
					</ArrayContainer>
				) : ( // sinon on affiche le texte
					<TextContainer>{content}</TextContainer>
				)}
			</div>
		</DropdownContainer>
	)
}

const DropdownContainer = styled.div`
	width: ${({ width }) => width};
	margin: ${({ center }) => center && '0 auto'};
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
`
const DropdownBtn = styled.button`
	color: white;
	background-color: ${colors.primaryPink};
	border: none;
	cursor: pointer;
	padding: 0.6rem 1rem;
	border-radius: 0.5rem 0.5rem 0 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`
const BtnLabel = styled.span`
	font-size: 1rem;
`
const TextContainer = styled.p`
	padding: 1.5rem 1rem 1rem;
`
const ArrayContainer = styled.ul`
	color: ${colors.primaryPink};
	padding: 1.5rem 1rem 1rem;
`

Dropdown.propTypes = {
	width: PropTypes.string,
	txt: PropTypes.string.isRequired,
	content: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.array.isRequired,
	]),
}
