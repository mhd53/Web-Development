import React from 'react';
import PropTypes from 'prop-types';

// Import Styled Components
import StyledSocialButton from '../styledComponents/StyledSocialButton';
import StyledContainer from '../styledComponents/StyledContainer';
import StyledImg from '../styledComponents/StyledImg';

// Import assets
import { FB, GooglePlusG, Instagram, Twitter } from '../../assets/iconAssets';
import Colors from '../../assets/colors';

class SocialButton extends React.Component {
	render() {
		return (
			<StyledSocialButton color="white" bgColor={this.props.bgColor}>
					<StyledImg src={this.props.imgSrc}
							   alt="social button"
							   color="white"
							   width={this.props.iconWidth}
							   height={this.props.iconHeight} />
			</StyledSocialButton>

			);
	}
}

SocialButton.defaultProps = {
	iconWidth: '50%',
	iconHeight: '50%',

}

export default SocialButton;