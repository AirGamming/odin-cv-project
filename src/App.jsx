import React, { useState } from 'react'
import Header from './components/header/header.jsx'
import { SwitchMain } from 'components/main/switch.jsx'
import './css/app.css'

export default function App() {
	const [state, setState] = useState({ state: 'Main' })
	return (
		<div id="app">
			<Header state={state} setState={setState} />
			<SwitchMain state={state} />
		</div>
	)
}
