import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row } from 'reactstrap';

// Import Styled components
import StyledContainer from '../../../../components/styledComponents/StyledContainer';
import StyledContent from '../../../../components/styledComponents/StyledContent'; 
import StyledButton from '../../../../components/styledComponents/StyledButton';

// Import assets
import { Mindset } from '../../../../assets/assets';

const styles = {
	display: 'flex',
	alignContent: 'center',
}

// Constants 
const PRINT_ME = false;

// Import productInfo content
// const content = require('../../../../content/content'); bug needs fix
const content = "Focus on what's important.";

class ProductInfo extends React.Component {
	render() {
		if (PRINT_ME) { // code debug
			console.log("ProductInfo: what's your mindset? " + Mindset);
		}

		return (
			<StyledContainer className="product-info" 
							 padding="20px"
							 height="500px" 
							 transparent
							 centerX
							 centerY
							 bgImg={Mindset}>
				<StyledContainer width="auto"
								 margin="auto"
								 >
						<Row>
							<Col xs="12">
								<StyledContent>
									{content}
								</StyledContent>
							</Col>
						</Row>

						<Row>
							<Col xs="12">
								<StyledContainer centerX>
									<StyledButton primary
												  fontSize="1.5em">
										Book a Cleaner
									</StyledButton>
								</StyledContainer>
							</Col>
						</Row>
				</StyledContainer>
			</StyledContainer>
			);
	}
}

export default ProductInfo;
