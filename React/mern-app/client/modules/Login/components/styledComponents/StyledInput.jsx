import styled from'styled-components';
import defaultTheme from '../../../../theme';

// Styled Component
const StyledInput = styled.input`
        width: 100%;
        margin-bottom: 20px;
        padding: 5px;
        border: 2px solid ${({theme}) => theme.borderColor};
        color ${props => props.invalid ? '#E53935' : ''};
        height: 50px;
        font-size: 22px;
        opacity: ${props => props.disabled ? .5 : 1};
        border-radius: 4px;
        `;

StyledInput.defaultProps = {
        theme: defaultTheme,
}

export default StyledInput;
