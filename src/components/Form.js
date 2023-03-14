import React, { Component } from "react";
import "../css/Form.css";
import data from "../json/formFields.json";
// import uniqid from "uniqid";

class Form extends Component {
	render() {
		return (
			<form>
				{data.map((el) => {
					return (
						<fieldset key={el.name} id={el.name}>
							<legend key={el.name}>{el.name}</legend>
							{el.components.map((e) => {
								return (
									<input
										key={e.name}
										type={e.type}
										name={e.name}
										placeholder={e.name}
										onChange={this.props.HandleChange}
										required={e.required}
									/>
								);
							})}
						</fieldset>
					);
				})}
			</form>
		);
	}
}

export default Form;
