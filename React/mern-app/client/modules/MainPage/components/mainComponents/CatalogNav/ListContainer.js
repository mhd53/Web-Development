import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Import components
import ListElem from './ListElem';

// Import Styled components
import StyledListHeader from '../../styledComponents/StyledListHeader';
import StyledUList from '../../styledComponents/StyledUList';


const StyledListContainer = styled.div`
	padding: 16px;
	`;

class ListContainer extends React.Component {
	render() {
		console.log("ListContainer: rendering list items...");
		const listItems = [];
		this.props.items.forEach((item) => {
			listItems.push( 
				<ListElem content={item} />
				);

		console.log("ListContainer: done rendering...");
		});


		return (
			<StyledListContainer>
				<StyledListHeader>
					{this.props.header}
				</StyledListHeader>
				{listItems}
			</StyledListContainer>
			);
	}

}

ListContainer.propTypes = {
	header: PropTypes.string,

}

export default ListContainer;
