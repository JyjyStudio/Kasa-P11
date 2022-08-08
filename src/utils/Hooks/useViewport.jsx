import { useContext } from 'react'
import { viewportContext } from '../Context/ViewportContext'

export default function useViewport() {
	const { viewportWidth } = useContext(viewportContext)
	return { viewportWidth }
}
