import React from 'react';
import {Col, Row} from 'reactstrap';

// Styled Components import   
import StyledContainer from './StyledComponents/StyledContainer';
import StyledForm from './StyledComponents/StyledForm';
import StyledFormLabel from './StyledComponents/StyledFormLabel';
import StyledInput from './StyledComponents/StyledInput';
import StyledOutput from './StyledComponents/StyledOutput';
import StyledButton from './StyledComponents/StyledButton';


/**
 * Presentational components:
 */
class PredictionInput extends React.Component {
	render() {
		const value = this.props.value;
		return (
			<Row>
				<Col xs="12">
					<StyledFormLabel>
						Data point:
						<StyledInput 
								invalid={!this.props.isValid}
								required
								// ref={this.invalid}
								// pattern="\[\d+,\s\d+\]"
								type="text" 
								onChange={this.props.handleChange} 
								disabled={this.props.isFitted} 
								placeholder="Enter data point i.e [0, 0]" 
								value={value} />
						<StyledButton 
								primary
								type="submit"
								>
							OK
						</StyledButton>
					</StyledFormLabel>
				</Col>
			</Row>
			);
	}
}

class PredictionOutput extends React.Component {
	render() {
		const output = this.props.output;
		return (
			<Row>
				<Col xs="12">
					<StyledFormLabel>
						Result Prediction:
						<StyledOutput name="result"> 
							{output}
						</StyledOutput> 
					</StyledFormLabel>
				</Col>
			</Row>
			);
	}
}

// Main Component
class ResultForm extends React.Component {
	constructor(props) {
	  super(props);
	
	  this.state = {value: '', isValid: true, isPopOpen: false};

	  // Reference
	  this.invalid = React.createRef();

	  // Bind methods
	  this.setValue = this.setValue.bind(this);
	  this.getValue = this.getValue.bind(this);
	  this.setIsValid = this.setIsValid.bind(this);
	  this.getIsValid = this.getIsValid.bind(this);
	  this.setIsPopOpen = this.setIsPopOpen.bind(this);
	  this.getIsPopOpen = this.getIsPopOpen.bind(this);

	  // Class Methods
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.validate = this.validate.bind(this);
	}

	// Getter and setter methods
	setValue(newValue) {
		this.setState({value: newValue});
	}

	setIsValid(newBool) {
		this.setState({isValid: newBool});
	}

	setIsPopOpen(newBool) {
		this.setState({popOpen: newBool});
	}

	getValue() {
		return this.state.value;
	}

	getIsValid() {
		return this.state.invalidInput;
	}

	getIsPopOpen() {
		return this.state.popOpen;
	}

	/**
	 * Check to see whether the user input is valid or not.
	 * Uses /\[\d+,\s\d+\]/ regx to validate the input.
	 * @param  {string} userInput [value that the user has entered]
	 * @return {[bool]} isValid [true if userInput is valid]
	 */
	validate(userInput) {
		var regx = new RegExp(this.props.regx);  
		console.log("My regx: " + regx);
		return regx.test(userInput);
	}

	/**
	 * Will update the state.value with what the user types in.
	 * @param  {react syntetic event]} e [description]
	 * @return {[type]}   [description]
	 */
	handleChange(e) {
		// alert(this.invalid.current.value);
		this.setValue(e.target.value);


	}

	/**
	 * Handle click method for the OK button.
	 * Will set state of the input to what the user has typed in.
	 * @return no return value.
	 */
	handleSubmit(e) {
		e.preventDefault();

		// Check to see if input is valid
		const isValid = this.validate(this.getValue());
		console.log("Is valid: " + isValid);
		this.setIsValid(isValid);
		if (this.getIsValid()) {
			this.props.setInput(this.props.getInput());
		}

		else {
			const isPopOpen = true;
			this.setIsPopOpen(isPopOpen);
		}
	}

	render() {
		const isFitted = this.props.getIsFitted();
		return (
			<Row>
				<Col xs="12">
					<StyledContainer className="result-form" marginTop="20px">
						<StyledForm onSubmit={this.handleSubmit}>
							<PredictionInput 
									className="prediction-input" 
									value={this.state.value}
									isValid={this.state.isValid}
									handleChange={this.handleChange}
									isFitted={isFitted} 
									/>
							<PredictionOutput 
									className="prediction-output" 
									output={this.props.output} 
									/>
						</StyledForm>
					</StyledContainer>
				</Col>
			</Row>
			);
	}
}

export default ResultForm;