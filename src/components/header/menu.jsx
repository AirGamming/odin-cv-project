import React from 'react'

export default function Menu({ setState }) {
	function OnClick(e) {
		setState(e.target.id)
		let activeItems = document.querySelectorAll('.active')
		activeItems.forEach((i) => {
			i.classList.remove('active')
		})
		e.target.classList.add('active')
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
