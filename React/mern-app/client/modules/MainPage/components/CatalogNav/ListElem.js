import React from 'react';
import PropTypes from 'prop-types';

// Import StyledComponents
import StyledListElem from './styledComponents/StyledListElem';

// Presentational component (pure)

class ListElem extends React.Component {
	render() { return (
			<StyledListElem>
				{this.props.content}
			</StyledListElem>
			);
	}

}

export default ListElem;