import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

import StyledContainer from '../../../../components/styledComponents/StyledContainer';
import StyledButton from '../../../../components/styledComponents/StyledButton';
import StyledSectionHeader from '../../../../components/styledComponents/StyledSectionHeader';

// Import Components
import ImageButton from './ImageButton';

// Import images
import { Apple, Arch, Boots, Chill, Shine, Tennis, Waves, ICON } from '../../../../assets/assets';

const styles = {
	width: '500px',
	heigth: '40px',
	padding: '16px',
}
// Constants
const PRINT_ME = false;

const IMG_ITEM_LIST = [Apple, Arch, Boots, Chill, Shine, Tennis, Waves];
// const IMG_TITLE_LIST = ['apple', 'architecture', 'boots', 'chill', 'shine', 'tennis', 'waves'];
const TITLE_LIST = ['Apple', 'Architecture', 'Boots', 'Chill', 'Shine', 'Tennis', 'Waves'];
// const RELATIVE_IMG_DIR = "../../../../assets/";

class OurServices extends React.Component {
	render() {
		if (PRINT_ME) {
			console.log("OurServices: rendering Image buttons...");
		}
		const imageButtons = [];
		let indexCount = 0;
		IMG_ITEM_LIST.forEach((item) => {
			if (PRINT_ME) { // code debug
				console.log("OurServices: Hello! loading image buttons... ");

			}
			const currentTitle = TITLE_LIST[indexCount];
			if (PRINT_ME) { // code debug 
				console.log("OurServices: item = " + item + " typeof = " + typeof item);
				console.log("OurServices: title = " + currentTitle); 
			}
			imageButtons.push(
				<ImageButton imgSrc={item}
							 imgWidth='500px'
							 imgHeight='400px'
							 title={TITLE_LIST[indexCount]}
							 iconSrc={ICON} /> 
				);
			indexCount++;

		});

		return (
			<StyledContainer className="our-services" padding="20px">
				<StyledContainer centerX centerY>
					<Row>
						<Col xs="12">
							<StyledSectionHeader>
								Our Services
							</StyledSectionHeader>
						</Col>
					</Row>
				</StyledContainer>
				<StyledContainer centerX centerY>
					<Row>
						<Col xs="12" md="6">
							{imageButtons[0]}
						</Col>
						<Col xs="12" md="6">
							{imageButtons[1]}
						</Col>
					</Row>
				</StyledContainer>

				<StyledContainer centerX centerY>
					<Row>
						<Col xs="12" md="4">
							{imageButtons[2]}
						</Col>
						<Col xs="12" md="4">
							{imageButtons[3]}
						</Col>
						<Col xs="12" md="4">
							{imageButtons[4]}
						</Col>
					</Row>
				</StyledContainer>

				<StyledContainer centerX centerY>
					<Row>
						<Col xs="12" md="6">
							{imageButtons[5]}
						</Col>
						<Col xs="12" md="6">
							{imageButtons[6]}
						</Col>
					</Row>
				</StyledContainer>

				<StyledContainer centerX centerY>
					<Row>
						<Col xs="12" md="12">
							<StyledButton primary
										  fontSize="1.5em">
										  See all Services 
							</StyledButton>

						</Col>
					</Row>
				</StyledContainer>
			</StyledContainer>

			);
	}

} 

export default OurServices;
