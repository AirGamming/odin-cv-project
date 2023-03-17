import React, { Component } from "react";
import "../css/Form.css";
import data from "../json/formFields.json";

class Form extends Component {
	constructor(props) {
		super(props);
		this.data = data;
	}
	render() {
		return (
			<form>
				{this.data.map((el) => {
					let btn;
					if (el.repeat) {
						btn = <button onClick={this.props.addNewLineHandle}>+ add</button>;
					} else {
						btn = null;
					}
					return (
						<fieldset key={el.name} id={el.name}>
							<legend key={el.name}>{el.name}</legend>
							{el.components.map((e) => {
								if (e.type === "textarea") {
									return (
										<textarea
											name={e.name}
											id={e.name}
											key={e.name}
											placeholder={e.placehodler}
											onChange={this.props.HandleChange}
										></textarea>
									);
								}
								return (
									<input
										key={e.name}
										type={e.type}
										name={e.name}
										id={e.name}
										placeholder={e.placeholder}
										onChange={this.props.HandleChange}
									/>
								);
							})}
							{btn}
						</fieldset>
					);
				})}
			</form>
		);
	}
}

export default Form;
