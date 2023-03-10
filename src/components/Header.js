import React from "react";
import Logo from "../images/cv-creator-high-resolution-logo-color-on-transparent-background.png";
import "../css/header.css"

function Header() {
	return (
		<div id="header">
			<img src={Logo} alt="logo" height="80px"/>
		</div>
	);
}

export default Header;
