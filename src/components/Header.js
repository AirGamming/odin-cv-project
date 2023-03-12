import React from "react";
import Logo from "../images/CVCreatorLogo.png";
import "../css/header.css";

function Header() {
	return (
		<div id="header">
			<img src={Logo} alt="logo" height="80px" />
		</div>
	);
}

export default Header;
