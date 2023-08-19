import React from 'react'

export default function Menu({ state, setState }) {
	function OnClick(e) {
		console.log(typeof e.target.id, ': ', e.target.id)
		console.log(state)
		setState(e.target.id)
	}
	return (
		<ul>
			<li id="Main" className="active" onClick={(e) => OnClick(e)}>
				Generator
			</li>
			<li id="About" onClick={(e) => OnClick(e)}>
				About
			</li>
		</ul>
	)
}
