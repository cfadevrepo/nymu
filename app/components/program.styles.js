import styled from 'styled-components';

const StyledTitle = styled.p`
  font-size: 30px;
  text-align: center;
`;


const StyledSubtext = styled.p`
  font-size: 16px;
  text-align: center;
`;

const StyledTableTitle = styled.p`
  font-size: 22px;
  color: black;
`;

const StyledTable = styled.table`
  border-left: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  border-spacing: 0;
  border-collapse: separate;
  width: 100%
  max-width: 1200px;
`;

const StyledTableRow = styled.tr`
`;

const StyledTableColumn = styled.td`
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  margin: 0;
  padding: 25px;
`;

const StyledTableColumnTitle = styled(StyledTableColumn)`
  font-size: 20px;
  color: black;
  font-weight: bold;
`;

const StyledTableColumnDate = styled(StyledTableColumn)`
  font-weight: bold;
`;

const StyledListItem = styled.li`
  padding: 5px;
`;

const StyledSealContainer = styled.div`
  text-align: center;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  padding: 25px;
  width: 240px;
`;

const StyledSealLabel = styled.p`
  font-weight: bold;
`;

const StyledSealImage = styled.img`
  height: 136px;
`;

const StyledText = styled.p`
  font-size: 16px;
  line-height: 23px;
`;

const StyledText2 = styled.div`
  font-size: 16px;
  line-height: 23px;
  margin-top: 0;
  margin-bottom: 25px;
`;

const StyledSkinnyText = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 15px;
  text-align: left;
`;

const StyledSkinnyTitle = styled.div`
  text-align: left;
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const StyledSKinnyDescription = styled.div`
  font-size: 16px;
  line-height: 23px;
`;

const StyledShortUnderline = styled.div`
  height: 5px;
  background-color: #42308f;
  width: 85px;
  margin-bottom: 15px;
`;

const StyledProgramGuideContainer = styled.div`
  background-color: #f9f9f9;
  padding: 25px;
`;

const StyledGuideLabel = styled.p `
  font-size: 22px;
  line-height: 29px;
  color: black;
`;

const StyledLink = styled.a`
  display: inline-block;
  padding: 15px;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #42308F;
  text-decoration: none;
  
  border: 2px solid #42308F;
  box-sizing: border-box;
  border-radius: 4px;
`;

const StyledUserLinksContainer = styled.div`
  background-color: #f7f5ff;
  padding: 25px;
  text-align: center;
`;

const StyledSkinnyTitle2 = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: bold;
`;

const StyledLargeNumber = styled.p`
  color: #42308f;
  font-size: 50px;
`;

const StyledLargeNumberSubtext = styled.span`
  font-size: 14px;
  text-align: center;
  display: block;
`;

const StyledUnderline = styled.div`
  height: 1px;
  background-color: #c4c4c4;
`;

const StyledCenteredActionButton = styled.div`
  margin: 50px auto;
  text-align: center;
`;

const StyledLinkText = styled.span`
  display: inline-block;
  padding: 15px;
  font-size: 14px;
  line-height: normal;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #42308F;
  
  border: 2px solid #42308F;
  box-sizing: border-box;
  border-radius: 4px;
`;

export {
  StyledTitle,
  StyledSubtext,
  StyledTableTitle,
  StyledTable,
  StyledTableRow,
  StyledTableColumn,
  StyledTableColumnTitle,
  StyledTableColumnDate,
  StyledListItem,
  StyledSealContainer,
  StyledSealLabel,
  StyledSealImage,
  StyledText,
  StyledText2,
  StyledSkinnyText,
  StyledSkinnyTitle,
  StyledSKinnyDescription,
  StyledShortUnderline,
  StyledProgramGuideContainer,
  StyledGuideLabel,
  StyledLink,
  StyledUserLinksContainer,
  StyledSkinnyTitle2,
  StyledLargeNumber,
  StyledLargeNumberSubtext,
  StyledUnderline,
  StyledCenteredActionButton,
  StyledLinkText,
};
