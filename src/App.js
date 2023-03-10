import Form from "./components/Form";
import Header from "./components/Header";
import "./css/app.css"
import { jsPDF } from "jspdf";

function App() {
	const doc = new jsPDF();

	doc.text("hello world",10,10)

	let savePDF = () =>
	{
		doc.save("cv.pdf")
	} 
	
	return (
		<div className="App">
      <Header />
			<Form />
			<button onClick={savePDF}>save PDF</button>
		</div>
	);
}

export default App;
