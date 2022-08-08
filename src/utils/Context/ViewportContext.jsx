import { createContext, useMemo, useEffect, useState } from "react"
import { debounce } from "../debounce"

export const viewportContext = createContext()

export const ViewportProvider = ({children}) => {
	
	const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
	const [counter, setCounter] = useState(0)

	const handleWindowResize = () => setViewportWidth(window.innerWidth)
	
	const optimizedHandleWindowResize = useMemo(() => debounce(handleWindowResize, 60), [])

	useEffect(() => {
		window.addEventListener('resize', optimizedHandleWindowResize)
		return () => {
			window.removeEventListener('resize', optimizedHandleWindowResize)
			setCounter((counter) => counter + 1)
		}
	}, [optimizedHandleWindowResize])

	console.log(counter);
	return (
		<viewportContext.Provider value={{viewportWidth}}>
			{children}
		</viewportContext.Provider>
	)
}
