import React from 'react';

// Material UI imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Import theme
import theme from './MuiTheme';

class Register extends React.Component {
	constructor(props) {
	  super(props);

	  // Bind methods
	  this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
	  this.handleLastNameChange = this.handleLastNameChange.bind(this);
	  this.handleEmailChange = this.handleEmailChange.bind(this);
	  this.handlePassChange = this.handlePassChange.bind(this);
	  this.handleOnClick = this.handleOnClick.bind(this);

	  this.state = {firstName: '', lastName: '', email: '', password: ''};
	}

	handleFirstNameChange(e, newValue) {
		this.setState({firstName: newValue});
	}

	handleLastNameChange(e, newValue) {
		this.setState({lastName: newValue});
	}

	handleEmailChange(e, newValue) {
		this.setState({email: newValue});
	}

	handlePassChange(e, newValue) {
		this.setState({password: newValue});
	}

	handleOnClick(e) {
		e.preventDefault();
		console.log('Submited!');
		console.log('Username: ' + this.state.username + ', Password: ' + this.state.password);
	}


	render() {
		return (
			<div className="register">
				<MuiThemeProvider theme={theme}>
					<div>
						<AppBar title="Register" />
						<TextField
							placeholder="Enter your First Name"
							label="First Name"
							onChange={this.handleFirstNameChange}
							/>
						<br />
						<TextField
							placeholder="Enter your Last Name"
							label="Last Name"
							onChange={this.handleLastNameChange}
							/>
						<br />
						<TextField
							placeholder="Enter your Email"
							type="email"
							label="Email"
							onChange={this.handleEmailChange}
							/>
						<br />
						<TextField
							type="password"
							placeholder="Enter your Password"
							label="Password"
							onChange={this.handlePassChange}
							/>
						<br />
						<Button 
							color="primary"
							variant="raised" 
							style={styles}
							onClick={this.handleOnClick}
							>
							Submit
						</Button>

					</div>
				</MuiThemeProvider>
			</div>
			);
	}
}

const styles = {
	margin: 15,

};

export default Register;