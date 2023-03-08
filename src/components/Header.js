import React from "react";
import Logo from "../images/logo-no-background.png";
import "./header.css"

function Header() {
	return (
		<div id="header">
			<img src={Logo} height="80px"/>
		</div>
	);
}

export default Header;
