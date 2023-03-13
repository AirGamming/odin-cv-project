import Form from "./components/Form";
import Header from "./components/Header";
import DocPreview from "./components/DocPreview";
import "./css/app.css";
import jsPDF from "jspdf";


function App() {
    const doc = new jsPDF('portrait', 'pt', 'a4');

    function savePDF() {
        doc.html(document.querySelector("#docPreview"), {
            callback: function (doc) {
                doc.save("cv.pdf");

            },

        });
    }
    let data = [
        {
            "name": "firstName",
            "value": "name"
        }
    ]

    function handleChange(e) {
        data.map(item => {
            if (item.name === e.target.key){
                item.value = e.target.value
            }
            return(item.value)
        }) 
    }

    return (
        <div className="App" id="app">
            <Header/>
            <Form HandleChange={handleChange}/>
            <DocPreview data={data}/>
            <button onClick={savePDF}>save PDF</button>
        </div>
    );
}

export default App;
