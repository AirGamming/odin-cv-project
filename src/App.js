import Form from "./components/Form";
import Header from "./components/Header";
import DocPreview from "./components/DocPreview";
import "./css/app.css";
import jsPDF from "jspdf";
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		this.doc = new jsPDF("portrait", "pt", "a4");
		this.handleChange = this.handleChange.bind(this);
		this.savePDF = this.savePDF.bind(this);
		this.data = [
			{
				name: "firstName",
				value: "name",
			},
		];
		this.state = {
			data: this.data,
		};
	}

	savePDF() {
		this.doc.html(document.querySelector("#docPreview"), {
			callback: function (doc) {
				doc.save("cv.pdf");
			},
		});
	}

	handleChange(e) {
		this.state.data.map((item) => {
			if (item.name === e.target.key) {
				item.value = e.target.value;
				console.log(this.data);
			}
			this.render();
			return item.value;
		});
	}
	render() {
		return (
			<div className="App" id="app">
				<Header />
				<Form HandleChange={this.handleChange} />
				<DocPreview state={this.state} />
				<button onClick={this.savePDF}>save PDF</button>
			</div>
		);
	}
}

export default App;
