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
              Tutoring support is an important feature of the Taiwan Capstone Year where students can make important
              linguistic breakthroughs in this highly individualized instructional format. Among other things, students
              can learn four character idioms, discover the appropriate way to draft a research paper, and ask questions
              about the topics most important to them. There will be one hour of one-on-one tutoring
per day, to be scheduled with language tutors (3 hours) and domain tutors (2 hours).
            </StyledText2>
            <br />
            <StyledTableTitle>
              Target Language Tutoring
            </StyledTableTitle>
            <StyledText2>
            During the first semester, three hours per week will be devoted to general language tutoring. Students
can choose which linguistic areas they want to focus on. As part of the second semester’s language
practicum, students will receive one hour of tutoring per week (individually scheduled so as not to
interfere with their internship hours) to practice language used in a professional environment.
            </StyledText2>
            <br />
            <StyledTableTitle>
              Domain Tutoring
            </StyledTableTitle>
            <StyledText2>
            <p>

            To give Capstone students the support they need to build academic and professional-level proficiency,
during the first semester, students will receive two hours of domain tutoring each week. Domain tutors
will help students read and comprehend their direct enrollment class materials, and help students
acquire domain terminologies. The goal of domain tutoring during the first semester is to help students
to dive more deeply into their domain studies and be successful in their direct enrollment classes.
            </p>

            <p>
            During the second semester internship period, when, ideally, students will be interning at a provider
related to their major domain, students may request one hour per week of domain tutoring (in addition
to the hour of practicum tutoring), in order to be best prepared linguistically and culturally for the
professional environment of their internships.

            </p>
            </StyledText2>
            <br />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
