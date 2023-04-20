import React from "react";
import "../css/doc.css";

const DocPreview = (props) => {
	let data = props.Data;
	let education = [data.school, data.degree, data.eduStarted, data.eduEnded];

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
			<main>
				<h2 className="subHeading">Description:</h2>
				{data.pInfoDescription} <br />
				<h2 className="subHeading">Education:</h2>
				{education.map((item, index) => {
					return (
						<div key={index}>
							<div className="dateInfo">
								<b>
									{item}-{item}
								</b>
								<i> {item} {item} </i>
							</div>
							<br />
							<p>{item}</p>							
						</div>
					);
				})}
				<h2 className="subHeading">Expirence:</h2>
				<div>
					<div className="dateInfo">
						<b>
							{data.expStarted}-{data.expEnded}
						</b>
						<i> school, degree </i>
					</div>
					<br />
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. At, minima.
					</p>
				</div>
			</main>
			<div className="aside">
				<p>
					E-mail Adress: <br />
					{data.email}
				</p>
				<br />
				<p>
					Phone Number: <br />
					{data.phone}
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
