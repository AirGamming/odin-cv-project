import Form from "./components/Form";
import Header from "./components/Header";
import DocPreview from "./components/DocPreview";
import "./css/app.css";
import jsPDF from "jspdf";
import React, { useState } from "react";
import placeholder from "./images/Portrait_Placeholder.png";

function App() {
	let doc = new jsPDF("portrait", "pt", "a4");

	const [data, setData] = useState({
		firstName: "firstName",
		lastName: "lastName",
		photo: placeholder,
	});

	function savePDF() {
		doc.html(document.querySelector("#docPreview"), {
			callback: function (doc) {
				doc.save("cv.pdf");
			},
		});
	}

	function handleChange(e) {
		let key = e.target.name;
		e.preventDefault();
		if (e.target.type === "file") {
			setData((prevData) => {
				return {
					...prevData,
					[key]: URL.createObjectURL(e.target.files[0]),
				};
			});
		} else {
			setData((prevData) => {
				return { ...prevData, [key]: e.target.value };
			});
		}
	}

	function HendleAddAditionalForms(e) {
		e.preventDefault();
		let regexExpression = /^-[0-9]$/g;
		let fieldset = e.target.parentElement;
		let allInputs = fieldset.querySelectorAll("input");
		let coreInputs = [];
		allInputs.forEach((element) => {
			if (element.key !== regexExpression) {
				coreInputs.push(element);
			}
		});

		coreInputs.forEach((element) => {
			let initialKey = element.id;
			element.id = initialKey + 1;
			fieldset.appendChild(element);
		});
	}

	return (
		<div className="App" id="app">
			<Header />
			<Form
				HandleChange={handleChange}
				addNewLineHandle={HendleAddAditionalForms}
			/>
			<DocPreview Data={data} />
			<button onClick={savePDF}>save PDF</button>
		</div>
	);
}

export default App;
