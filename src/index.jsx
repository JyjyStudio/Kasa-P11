import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './utils/style/index.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<div className="App">
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</div>
	</BrowserRouter>
)

