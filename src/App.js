import Form from "./components/Form";
import Header from "./components/Header";
import DocPreview from "./components/DocPreview";
import "./css/app.css";
import jsPDF from "jspdf";


function App() {
	const doc = new jsPDF('portrait', 'pt', 'a4');



	function savePDF (){
		console.log(document.querySelector("#docPreview"))
		doc.html(document.querySelector("#docPreview"), {
			callback: function (doc) {
			  doc.save();

			},
			
		 });
	};

	function handleChange(e) {
		console.log("elo")
	}

	return (
		<div className="App">
			<Header />
			<Form HandleChange={handleChange}/>
			<DocPreview />
			<button onClick={savePDF}>save PDF</button>
		</div>
	);
}

export default App;
