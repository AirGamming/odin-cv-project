import React, { useEffect, useState } from 'react'
import Main from './main.jsx'
import About from './about.jsx'

export function SwitchMain(state) {
	console.log(state.state.state)
	let visabilitySwitch = (currentState) => {
		let selected = document.querySelectorAll(`#${currentState}`)
		let active = document.querySelectorAll(`.active`)
		selected.forEach((e) => e.classList.add('active'))
		active.forEach((e) => e.classList.remove('active'))
	}
	useEffect(() => {
		visabilitySwitch(state.state)
	})
	return (
		<>
			<Main />
			<About />
		</>
	)
}
