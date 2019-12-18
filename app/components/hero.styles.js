import styled from 'styled-components';

const StyledHeroContainer = styled.div`
  width: 100%;
  height: 500px;
  text-align: center;
  position: relative;
  background: rgba(0, 0, 0, 0.2);
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const StyledHeroText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: white;
  width: 100%;
`;

const StyledHeroSubtext = styled.p`
  font-size: 18px;
  line-height: 29px;
  max-width: 750px;
  margin: 20px auto;
`;

export {
  StyledHeroContainer,
  StyledHeroText,
  StyledHeroSubtext,
};
