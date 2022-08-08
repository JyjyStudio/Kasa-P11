import { createContext, useEffect, useState } from "react"

export const viewportContext = createContext()

export const ViewportProvider = ({children}) => {
	
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
	const [counter, setCounter] = useState(0)

	const handleWindowResize = () => setViewportWidth(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize)
		return () => {
			window.removeEventListener('resize', handleWindowResize)
			setCounter((counter) => counter + 1)
		}
	}, [])

	console.log(counter);
	return (
		<viewportContext.Provider value={{viewportWidth}}>
			{children}
		</viewportContext.Provider>
	)
}
