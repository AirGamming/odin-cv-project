import React from 'react'
import Main from './main.js'
import About from './about.js'

export function SwitchMain() {
	const defaultPage = 'Main'
	let currentPage = defaultPage
	if (currentPage === 'Main') {
		return <Main />
	} else if (currentPage === 'About') {
		return <About />
	}
}
