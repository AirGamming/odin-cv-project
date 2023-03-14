import React, { Component } from "react";
import "../css/doc.css";
import placeholder from "../images/Portrait_Placeholder.png";

class DocPreview extends Component {
	render() {
		console.log(this.props.data);
		return (
			<div id="docPreview">
				<div className="header">
					<img src={placeholder} alt="profile placeholder" height="96px" />
					<div>
						<h2>{this.props.data.firstName}</h2>
						<i>Junior Frontend Developer</i>
					</div>
				</div>
				<div className="aside"></div>
			</div>
		);
	}
}

export default DocPreview;
