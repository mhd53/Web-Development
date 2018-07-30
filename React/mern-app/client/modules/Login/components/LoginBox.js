import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Import Main compoents
import InputBox from './InputBox';

// Import Styled components
import StyledContainer from '../../../components/styledComponents/StyledContainer';
import StyledForm from './styledComponents/StyledForm';
import StyledInput from './styledComponents/StyledInput';
import StyledFormLabel from './styledComponents/StyledFormLabel'; 
import StyledLoginButton from './styledComponents/StyledLoginButton';
import StyledLink from './styledComponents/StyledLink';

// Styled Components
const Header = styled.h1`
	margin: 0; 
	font-weight: bold;
	text-align: center;
	font-size: 32px; 
	padding: 0 0 20px 0; 
	`;

class LoginBox extends React.Component {
	render() {
		return (
			<StyledContainer className="login-box" 
							 width="auto"
							 margin="auto"
							 padding="20px"
							 boxSizing='border-box'
							 >
				<StyledForm width={this.props.width} height={this.props.height} margin="auto" padding="70px 30px" >
					<Header>
						Login Here
					</Header>
					<InputBox type="text" label="Username" placeholder="Enter Username" />
					<InputBox type="password" label="Password" placeholder="Enter Password" />
					<StyledLoginButton type="submit" value="Login/Signup" /><br></br>
					<StyledLink href="#">Lost your password?</StyledLink>
				</StyledForm>

			</StyledContainer>
			);
	}
}

export default LoginBox;