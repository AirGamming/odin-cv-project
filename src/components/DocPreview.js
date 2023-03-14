import React from "react";
import "../css/doc.css";

const DocPreview = (props) => {
	// console.log(this.props.data);
	let data = props.Data;

	return (
		<div id="docPreview">
			<div className="header">
				<img src={data.photo} alt="profile placeholder" height="96px" />
				<div>
					<h2>
						{data.firstName} {data.lastName}
					</h2>
					<i>{data.title}</i>
				</div>
			</div>
			<div className="aside"></div>
		</div>
	);
};

export default DocPreview;
