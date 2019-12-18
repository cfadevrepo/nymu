import React from 'react';
import {
  StyledText2,
  StyledListItem,
  StyledTitle,
} from './program.styles';

export default class AcademicsCertifications extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="home-section-info">
          <div className="home-section-info-wrapper">
            <StyledTitle
              style={{
                textAlign: 'left',
              }}
            >
              Certifications
            </StyledTitle>
            <StyledText2>
              To receive Language Flagship certification, the students must complete the exit proficiency assessment which will be held during the last
              week of the Capstone Year, immediately after the three-week long Superior-Level Chinese Language
              Practicum.
            </StyledText2>
            <br />
            <StyledText2
              style={{
                fontWeight: 'bold',
                marginBottom: 0,
              }}
            >
              Flagship Certificate:
            </StyledText2>
            <StyledText2>
              <ul>
                <StyledListItem>
                  Students who meet the minimum levels (speaking, IRL level 3; listening, IRL level 2+; reading, IRL
                  level 2+) will receive Flagship Certification
                </StyledListItem>
                <StyledListItem>
                  Students who have achieved IRL level 3 in speaking, listening, and reading will receive the Flagship
                  Certification with Distinction
                </StyledListItem>
              </ul>
            </StyledText2>
            <br />
            <StyledText2>
               Certificates will be issued by The Language Flagship and mailed to each domestic
              program for distribution.
            </StyledText2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
