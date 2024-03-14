import styled from 'styled-components';

const headerSize = 56;
const footerSize = 44;
export const StyledContainer = styled.main`
    padding: 1rem;  
    min-height: calc(100vh - ${headerSize + footerSize}px);
`;
