import React from 'react'
import '../../css/header.css'
import Menu from './menu.js'

export default function Header({ state, setState }) {


	return (
		<header>
			<div id="logo">
				<i className="fa-solid fa-file-pen"></i>
				<h1>CV generator</h1>
			</div>
			<Menu state={state} setState={setState}/>
		</header>
	)
}
