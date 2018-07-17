import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import ResultForm from './ResultForm';
import SimpleNN from './SimpleNN'; 

// Styled Components import
import StyledContainer from './StyledComponents/StyledContainer';

class ModelContainer extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {input: '', isFitted: false, output: ''};

	  // Bind methods
	  this.setInput = this.setInput.bind(this);
	  this.setIsFitted = this.setIsFitted.bind(this);
	  this.setOutput = this.setOutput.bind(this);
	  this.getInput = this.getInput.bind(this);
	  this.getIsFitted = this.getIsFitted.bind(this);
	  this.getOutput = this.getOutput.bind(this);

	}
	// Setter and getter methods (some standards should remain the same)
	setInput(newInput) {
		this.setState({input: newInput});
	}

	setIsFitted(newBool) {
		this.setState({isFitted: newBool});
	}

	setOutput(newOutput) {
		this.setState({output: newOutput});
	}

	getInput() {
		return this.state.input;
	}

	getIsFitted(newBool) {
		return this.state.isFitted;
	}

	getOutput() {
		return this.state.output;
	}

	render() {
		const modelName = this.props.modelName;
		let model;
		if (modelName == 'snn') {
			/* Create a Simple Neural Net model. */
			model = <SimpleNN dataset={this.props.dataset} 
							  setIsFitted={this.setIsFitted}
							  getIsFitted={this.getIsFitted}
							  setOutput={this.setOutput}
							  getInput={this.getInput}
							  title="Simple Neural Net Powers!" 
							  />
		}


		return (
			<StyledContainer width="100%">
			{/* Use conditional render + model state to render different models */}
			<Container>
				<Row className="model">
					<Col xs="12">
						{model}
					</Col>
				</Row>

				<Row className="modelForm">
					<Col xs="12">
						<ResultForm setInput={this.setInput}
									getInput={this.getInput}
									getOutput={this.getOutput}
									getIsFitted={this.getIsFitted}
									regx={this.props.regx}
									/>
					</Col>
				</Row>
			</Container>
			</StyledContainer>
			);
	}
}

export default ModelContainer;