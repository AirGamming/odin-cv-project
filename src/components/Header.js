import React from "react";
import Logo from "../images/cv-creator-high-resolution-logo-color-on-transparent-background.png";
import "./header.css"

function Header() {
	return (
		<div id="header">
			<img src={Logo} height="80px"/>
		</div>
	);
}

export default Header;
