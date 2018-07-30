import React from 'react';
import PropTypes from 'prop-types';

// Import Styled Components
import StyledImgButton from '../styledComponents/StyledImgButton';
import StyledImg from '../styledComponents/StyledImg';
import StyledContainer from '../styledComponents/StyledContainer';

class ImgButton extends React.Component {
	render() {
		return (
			<StyledImgButton margin={this.props.margin}>
				<StyledImg src={this.props.imgSrc}
						   alt="img button"
						   width={this.props.width}
						   height={this.props.height} />
			</StyledImgButton>
			);
	}
}

export default ImgButton;