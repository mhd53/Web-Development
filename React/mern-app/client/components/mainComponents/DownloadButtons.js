import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

// Import Main Components
import ImgButton from './ImgButton';

// Import Styled Components
import StyledImgButton from '../styledComponents/StyledImgButton';
import StyledImg from '../styledComponents/StyledImg';
import StyledContainer from '../styledComponents/StyledContainer';

// Import assets 
import { GoogleBadge, AppleBadge } from '../../assets/iconAssets';

class DownloadButtons extends React.Component {
	render() {
		return (
			<StyledContainer className="download-buttons">
				<Row>
					<Col xs="12" md="6">
						<StyledImgButton image={GoogleBadge}
								   		 margin="5px"
								   		 width="250px"
								   		 height="125px" />

					</Col>
					<Col xs="12" md="6">
						<StyledImgButton image={AppleBadge}
								   		 margin="5px"
								   		 width="250px"
								   		 height="125px" />
					</Col>
				</Row>
			</StyledContainer>
			);
	}
}

export default DownloadButtons;




