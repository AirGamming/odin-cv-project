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
		let regexWithNumbers = new RegExp(/(.*\d$)/s);
		let fieldset = e.target.parentNode;
		let inputs = fieldset.querySelectorAll("input, textarea");
		let coreInputs = [];
		let newInputs = [];

		inputs.forEach((el) => {
			if (!regexWithNumbers.test(el.id)) {
				coreInputs.push(el);
				console.log(el.id);
			}
			newInputs.push(el);
		});
		console.log(!regexWithNumbers.test("position-1-1"));
		console.log(coreInputs);
		coreInputs.forEach((el) => {
			let newElement = document.createElement(el.localName);
			newElement.id = el.id + "-1";
			newElement.key = el.key;
			if (newElement.type !== "textarea") {
				newElement.type = el.type;
			}
			newElement.placeholder = el.placeholder;
			newInputs.push(newElement);
		});

		newInputs.forEach((el) => {
			fieldset.appendChild(el);
		});
	}

	return (
		<div className="App" id="app">
			<Header />
			<Form
				HandleChange={handleChange}
				newLineHandle={HendleAddAditionalForms}
			/>
			<DocPreview Data={data} />
			<button onClick={savePDF}>save PDF</button>
		</div>
	);
}

export default App;
