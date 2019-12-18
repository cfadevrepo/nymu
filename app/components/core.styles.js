import styled from 'styled-components';

const StyledLearnMore = styled.a`
  font-size: 14px;
  color: #585858;
`;

const StyledSectionImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: ${({ maxWidth }) => maxWidth}px;
  max-height: ${({ maxHeight }) => maxHeight}px;
`;

export {
  StyledLearnMore,
  StyledSectionImage,
};
