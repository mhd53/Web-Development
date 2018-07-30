import styled from'styled-components';

// Styled Component
const StyledForm = styled.form`
        width: ${props => props.width};
        height: ${props => props.height};
        margin: ${props => props.margin};
        padding: ${props => props.padding};
        border: 4px solid black;
        border-radius: 4px;
        `;

export default StyledForm;
