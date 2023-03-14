import Form from "./components/Form";
import Header from "./components/Header";
import DocPreview from "./components/DocPreview";
import "./css/app.css";
import jsPDF from "jspdf";
import { useState } from "react";

function App() {
	let doc = new jsPDF("portrait", "pt", "a4");

	const [data, setData] = useState({
		firstName: "name",
	});

	function savePDF() {
		doc.html(document.querySelector("#docPreview"), {
			callback: function (doc) {
				doc.save("cv.pdf");
			},
		});
	}

	function handleChange(e) {
		e.preventDefault();
		setData((prevData) => {
			return { ...prevData, firstName: e.target.value };
		});
	}

	return (
		<div className="App" id="app">
			<Header />
			<Form HandleChange={handleChange} />
			<DocPreview data={data} />
			<button onClick={savePDF}>save PDF</button>
		</div>
	);
}

export default App;
