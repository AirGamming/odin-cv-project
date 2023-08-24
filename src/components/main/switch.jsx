import React, { useEffect } from 'react'
import Main from './main.jsx'
import About from './about.jsx'

export function SwitchMain(state) {
	let visabilitySwitch = (currentState) => {
		//removing active class to current main div
		let active = document.querySelectorAll(`.active`)
		active.forEach((e) => {
			e.classList.remove('active')
		})
		//adding active class to current main div
		let selected = document.querySelectorAll(`#${currentState}`)
		selected.forEach((e) => {
			e.classList.add('active')
		})
	}
	// on update
	useEffect(() => {
		visabilitySwitch(state.state)
	}, [state])
	// on mount
	useEffect(() => {
		visabilitySwitch('Main')
	}, [])
	return (
		<>
			<Main />
			<About />
		</>
	)
}
