import React from 'react';
import PropTypes from 'prop-types';

// Import StyledComponents 
import StyledImgButton from '../../../../components/styledComponents/StyledImgButton';
import StyledButtonIcon from './styledComponents/StyledButtonIcon';
import StyledServiceTitle from './styledComponents/StyledServiceTitle';
import StyledImg from '../../../../components/styledComponents/StyledImg';

// temp
const styles = {
	width: '500px',
	height: '400px',
	padding: '16px'
};

// Constants
const PRINT_ME = false;

class ImageButton extends React.Component {
	render() {
		if (PRINT_ME) { // code debug
			console.log("ImageButton: imgSrc = " + this.props.imgSrc + 
						" iconSrc = " + this.props.iconSrc);

			console.log("ImageButton: width = " + this.props.imgWidth + " height = " + this.props.imgHeight);
		}
		return (
			<StyledImgButton >
				<StyledImg src={this.props.imgSrc} 
					 	   alt="image here" 
					       width={this.props.imgWidth}
					 	   height={this.props.imgHeight}
					 	   />
				<StyledButtonIcon src={this.props.iconSrc} 
								  bgColor={this.props.iconBgColor} 
								  radius="30px"
								  alt="icon here" />
				<StyledServiceTitle>
					{this.props.title}
				</StyledServiceTitle>
			</StyledImgButton>
			);
	}
}

ImageButton.propTypes = {
	imgWidth: PropTypes.string,
	imgHeight: PropTypes.string,
	imgSrc: PropTypes.string,
	iconSrc: PropTypes.string,
}

export default ImageButton;