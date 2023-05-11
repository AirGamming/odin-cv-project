import React from "react";
import "../css/doc.css";

const DocPreview = (props) => {
	let data = props.Data;

	let schoolData = [
		"school",
		"degree",
		"eduStarted",
		"eduEnded",
		"eduDescription",
	];
	// let regexWithNumbers = new RegExp(/(.*\d$)/s);

	let dataFormated = [
		{
			index: 0,
			school: data.school,
			degree: data.degree,
			eduStarted: data.eduStarted,
			eduended: data.eduEnded,
			eduDescription: data.eduDescription,
		},
	];

	for (let [key, value] of Object.entries(data)) {
		let index = key.split("-")[1];
		if (index === undefined) {
			index = 0;
		}
		if (dataFormated[index] == undefined) {
			let objectCopy = dataFormated[0];
			objectCopy.index = index;
			dataFormated = [...dataFormated, objectCopy];
		}

		console.log("elo");
	}
	console.log(dataFormated);
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
				{dataFormated.map((item, index) => {
					return (
						<div key={index}>
							<div className="dateInfo">
								<b>
									{item.eduStarted}-{item.eduended}
								</b>
								<i>
									{" "}
									{item.school}, {item.degree}{" "}
								</i>
							</div>
							<br />
							<p>{item.eduDescription}</p>
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
