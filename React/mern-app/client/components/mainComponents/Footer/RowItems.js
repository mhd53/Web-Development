import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

// Import Main components
import RowItem from './RowItem';

// Import Styled components
import StyledContainer from '../../styledComponents/StyledContainer';
import StyledRowHeader from './styledComponents/StyledRowHeader';

class RowItems extends React.Component {
	render() {
		const rowItems = [];
		this.props.items.forEach((item) => {
			rowItems.push (
				<RowItem content={item} />
				);

		});

		return (
			<StyledContainer width="auto" overflow="null" margin="5px" >
				<Row>
					<StyledRowHeader> 
						{this.props.header}
					</StyledRowHeader>
				</Row>
				{rowItems}
			</StyledContainer>
			);
	}

}

export default RowItems;