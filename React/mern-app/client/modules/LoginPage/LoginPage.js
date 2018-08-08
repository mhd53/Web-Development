import React from 'react';
import { Link } from 'react-router';

// Material UI imports
import { MuiThemeProvider } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/TextField';

// Import theme 
import theme from './components/MuiTheme';

// Import components
import Login from './components/Login';
import Register from './components/Register'; 
import MuiAppbar from './components/MuiAppbar';

// Presentational component
function ButtonLink(props) {
	return (
		<Link to={props.link}>
			<Button 
				color="primary"
				variant="raised"
				style={styles}
				onClick={props.onClick}
				>
				{props.label}
			</Button>
		</Link>
		);
}

// Main component
class LoginPage extends React.Component {
	constructor(props) {
	  super(props);

	  // Bind methods
	  this.handleOnClick = this.handleOnClick.bind(this);
	
	  this.state = {username: '',
					password: '',
					loginscreen: [],
					loginMessage: '',
					buttonLabel: 'Register',
					isLogin: true};
	}

	handleOnClick(e) {
		e.preventDefault();
		if (this.state.isLogin) {
			this.setState({ isLogin: false });
		} else {
			this.setState({ isLogin: true });
		}
	}

	render() {
		let buttonLink;
		let loginMessage;
		let formComponent;
		console.log("LoginPage: what is login status: " + this.state.isLogin);
		if (this.state.isLogin) {
			buttonLink = <ButtonLink onClick={this.handleOnClick}  
									 label="Register"
									 link="login:login"
									 />;
			loginMessage = "Not registered yet? Register Now";
			formComponent = <Login />;
		} else {
			buttonLink = <ButtonLink onClick={this.handleOnClick}
									 label="Login"
									 link="login:register"
									 />;
			loginMessage = "Already registered? Login instead";
			formComponent = <Register />;
		}

		return(
			<div className="login-page">
				<MuiThemeProvider theme={theme}>
					<MuiAppbar />
					{formComponent}
					{loginMessage}
					{buttonLink}
				</MuiThemeProvider>
			</div>
			);
	}
}
 
const styles = {
	margin: 15,
}

export default LoginPage;