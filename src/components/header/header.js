import React from "react";
import "../../css/header.css";
import Menu from "./menu.js"

export default function HeaderExp() {
  return (
		<header>
			<div id="logo">
				<i class="fa-solid fa-file-pen"></i>
				<h1>CV generator</h1>
			</div>
			 <Menu />
		</header>
	);
}
