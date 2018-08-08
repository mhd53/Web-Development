import React from 'react';

// Material UI imports
import { MuiThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Import theme
import theme from './MuiTheme';

class Login extends React.Component {
	constructor(props) {
	  super(props);

	  // Bind methods
	  this.handleUserChange = this.handleUserChange.bind(this);
	  this.handlePassChange = this.handlePassChange.bind(this);
	  this.handleOnClick = this.handleOnClick.bind(this);
	
	  this.state = {username: '', password: ''};
	}

	handleUserChange(e, newValue) {
		this.setState({username: newValue});
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
			<div className="login">
				<MuiThemeProvider theme={theme}>
					<div>
						<AppBar position="absolute" 
								color="primary" 
								title="Login" />
						<TextField
							placeholder="Enter your Username"
							label="Username"
							onChange={this.handleUserChange}
							/>
						<br />
						<TextField
							type="password"
							placeholder="Enter your password"
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

export default Login;