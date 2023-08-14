import React, { useState } from 'react'
import Header from './components/header/header.js'
import { SwitchMain } from 'components/main/switch.js'
import './css/app.css'

export default function App() {
	const [state, setState] = useState('main')
	return (
		<div>
			<Header state={state} setState={setState} />
			<SwitchMain />
		</div>
	)
}
