import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

// Import Main components 
import SocialButton from './SocialButton';

// Import Styled Components
import StyledContainer from '../styledComponents/StyledContainer';
import StyledSocialButton from '../styledComponents/StyledSocialButton';


// Import assets
import { FB, GooglePlusG, Instagram, Twitter } from '../../assets/iconAssets';
import Colors from '../../assets/colors';

// Semi presentational component
class SocialButtons extends React.Component {
	render() {
		console.log("SocialButtons: " + Colors["FB_COLOR"]);
		return (
			<StyledContainer className="social-buttons">
				<Row> 
					<Col xs="3">
						<SocialButton bgColor={Colors["FB_COLOR"]} imgSrc={FB} /> 
					</Col>
					<Col xs="3">
						<SocialButton bgColor={Colors["INSTAGRAM_COLOR"]} imgSrc={Instagram} />
					</Col>
					<Col xs="3">
						<SocialButton bgColor={Colors["TWITTER_COLOR"]} imgSrc={Twitter} />
					</Col>
					<Col xs="3">
						<SocialButton bgColor={Colors["GOOGLE_COLOR"]} imgSrc={GooglePlusG} />
					</Col>
				</Row>

			</StyledContainer>
			);
	}
}

export default SocialButtons;
