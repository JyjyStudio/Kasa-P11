import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './utils/style/index.css'
import Home from './pages/Home'
import Logement from './pages/Logement'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/logement:id" element={<Logement />} />
			<Route path="/about" element={<About />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		<Footer/>
	</BrowserRouter>
)

