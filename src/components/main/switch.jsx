import React, { useEffect } from 'react'
import Main from './main.jsx'
import About from './about.jsx'

export function SwitchMain(state) {
	console.log(state.state === 'Main')
	const func = (state) => {
		if (state === 'Main') {
			console.log('switch')
			return <Main />
		} else if (state === 'About') {
			console.log('switch')
			return <About />
		}
	}
	useEffect(() => {
		func(state.state)
	})
	func()
}
