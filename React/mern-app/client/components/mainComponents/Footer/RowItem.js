import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

// Import Styled Components
import StyledContainer from '../../styledComponents/StyledContainer';
import StyledItem from './styledComponents/StyledItem';

class RowItem extends React.Component {
	render() {
		
		return (
			<Row>
				<StyledItem>
					{this.props.content}
				</StyledItem>

			</Row>
			);
	}
}


export default RowItem;