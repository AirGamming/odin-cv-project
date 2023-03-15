import React from "react";
import "../css/doc.css";

const DocPreview = (props) => {
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
			<div className="aside">
				<p>
					Phone Number: <br />
					{data.phone}
				</p>
				<br />
				<p>
					E-mail Adress: <br />
					{data.email}
				</p>
				<br />
				<p>
					Adress: <br />
					{data.adress}
				</p>
			</div>
		</div>
	);
};

export default DocPreview;
