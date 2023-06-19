import "../css/footer.css";
import React from "react";

export default function Footer() {
	return (
		<footer>
			<p>open source project || Arkadiusz Czechyra</p>
			<br />
			<a href={" https://github.com/AirGamming"}>
				<i className="fa-brands fa-github"></i>
			</a>
		</footer>
	);
}
