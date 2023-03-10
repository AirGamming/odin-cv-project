import Form from "./components/Form";
import Header from "./components/Header";
import DocPreview from "./components/DocPreview";
import "./css/app.css";
import jsPDF from "jspdf";


function App() {
	const doc = new jsPDF();



	let savePDF = () => {
		console.log(document.querySelector("#docPreview"))
		doc.html(document.querySelector("#docPreview"), {
			callback: function (doc) {
			  doc.save();
			},
			x: 10,
			y: 10
		 });
	};

	return (
		<div className="App">
			<Header />
			<Form />
			<DocPreview />
			<button onClick={savePDF}>save PDF</button>
		</div>
	);
}

export default App;
