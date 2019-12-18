import React from 'react';
import {
  StyledText2,
  StyledTableTitle,
  StyledTitle,
} from './program.styles';

export default class AcademicsTutoringSupport extends React.PureComponent {
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
              Tutoring Support
            </StyledTitle>
            <StyledText2>
              Tutoring support is an important feature of the Taipei Capstone year where students can make important
              linguistic breakthroughs in this highly individualized instructional format. Among other things, students
              can learn four character idioms, discover the appropriate way to draft a research paper, and ask questions
              about the topics most important to them.
            </StyledText2>
            <br />
            <StyledTableTitle>
              Target Language Tutoring
            </StyledTableTitle>
            <StyledText2>
            In addition to the two academic courses offered during the first semester, students will have a minimum of five hours of one-on-one tutoring. Three hours will be devoted to general language tutoring. Students can choose which linguistic areas they want to focus on. During the second semester’s language practicum, in addition to daily language classes, students will receive one hour of tutoring per day for three weeks.

            </StyledText2>
            <br />
            <StyledTableTitle>
              Domain Tutoring
            </StyledTableTitle>
            <StyledText2>
            To give Capstone students the support they need to build academic and professional-level proficiency, during the first semester, students will receive two hours of domain tutoring each week. Domain tutors will help students read and comprehend their direct enrollment class materials, help them plan their domain research projects, and review their presentations.
            </StyledText2>
            <br />
            <StyledText2>
            Domain tutors will help students acquire both domain terminologies and the phraseology that is used by native Mandarin speakers in their specific field of interest. The goal of domain tutoring is not only to help students to dive more deeply into their domain studies and be successful in their direct enrollment classes, but also to prepare students both linguistically and culturally for their second semester internships in various professional environments.

            </StyledText2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
