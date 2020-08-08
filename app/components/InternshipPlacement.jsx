import React from 'react';
import {
  StyledText2,
  StyledTitle,
} from './program.styles';

export default class InternshipPlacement extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
          <StyledTitle
            style={{
              textAlign: 'left',
            }}
          >
            Placement
          </StyledTitle>
          <StyledText2>
            Helping to place Capstone Year students in the best internship opportunities, and then ensuring that these
            students are prepared for the Chinese workplace and excel while interning, is the focus of the Taiwan
            Center’s Internship Coordinator.
          </StyledText2>
          <StyledText2>
            Finding an internship in a foreign country can feel daunting to students. The Taiwan Internship
            Coordinator will assist by creating connections and developing relationships in all areas of Taipei’s bustling
            economy: finance, the arts, information technology, medical research companies, marketing, hospitality,
            manufacturing, and more. The Coordinator will also be working with the Office of Alumni at National Yang-Ming
            University (NYMU), to seek out well-situated NYMU graduates who are open to having a U.S. intern placed
            in their office.
          </StyledText2>
          <StyledText2>
            To ensure a good fit between student and internship site, the Internship Coordinator will take into close
            account the student’s responses to the internship questionnaire (a part of the program’s acceptance
            packet) and will assess both the student’s language proficiency and professional aspirations. The
            Coordinator will make pre-internship site visits to any potential internship providers, and help to make
            the best match between student and site.
          </StyledText2>
          <StyledText2>
            Beyond this, to further support the interning students, the Internship Coordinator will, along with the
            in-service internship course instructor, share professional language document samples, continue to advise
            students about the nuances of workplace communication and etiquette, and read the students’ weekly reports
            and provide feedback.
          </StyledText2>
        </div>
      </div>
    );
  }
}
