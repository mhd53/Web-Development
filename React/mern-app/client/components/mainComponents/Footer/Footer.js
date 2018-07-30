import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';

// Import Main components 
import SocialButtons from '../SocialButtons';
import DownloadButtons from '../DownloadButtons';
import RowContainer from './RowContainer';


// Import Styled components
import StyledContainer from '../../styledComponents/StyledContainer';

class Footer extends React.Component {
	render() {
		return (
			<StyledContainer height="600px" className="footer" padding="20px" pos="absolute" bot="0" bgColor="#242526">
				<Row>
					<Col>
					</Col>
					<Col>
						<RowContainer />
					</Col>
				</Row>
			</StyledContainer>
			);
	}
}

export default Footer;
