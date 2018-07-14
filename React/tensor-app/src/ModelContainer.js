import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import ResultForm from './ResultForm';
import SimpleNN from './SimpleNN'; 

// Styled Components import
import StyledContainer from './StyledComponents/StyledContainer';

class ModelContainer extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {input: '', isFitted: false};

	  // Bind methods
	  this.setInput = this.setInput.bind(this);
	  this.setIsFitted = this.setIsFitted.bind(this);
	  this.getInput = this.setInput.bind(this);
	  this.getIsFitted = this.getIsFitted.bind(this);
	}
	// Setter and getter methods (some standards should remain the same)
	setInput(newInput) {
		this.setState({input: newInput});
	}

	setIsFitted(newBool) {
		this.setState({isFitted: newBool});
	}

	getInput() {
		return this.state.input;
	}

	getIsFitted(newBool) {
		return this.state.isFitted;
	}

	render() {
		const modelName = this.props.modelName;
		let model;
		if (modelName == 'snn') {
			/* Create a Simple Neural Net model. */
			model = <SimpleNN dataset={this.props.dataset} 
							  setInput={this.setInput} 
							  setIsFitted={this.setIsFitted}
							  getInput={this.getInput}
							  getIsFitted={this.getIsFitted}
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
									regx={this.props.regx}
									setIsFitted={this.setIsFitted}
									getInput={this.getInput}
									getIsFitted={this.getIsFitted}
									/>
					</Col>
				</Row>
			</Container>
			</StyledContainer>
			);
	}
}

export default ModelContainer;