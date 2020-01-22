import React from 'react';
import {
  StyledText2,
  StyledTitle,
  StyledListItem,
} from './program.styles';
import LearnMore from './LearnMore';

export default class InternshipApplicationProcess extends React.PureComponent {
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
              Application Process
            </StyledTitle>
            <StyledText2>
              <strong>
                There are four requirements for the Taiwan Capstone Year internship program:
              </strong>
              <ul>
                <StyledListItem>
                  Students are required to work full time (40 hours a week, including the two-and-a-half-hour weekly class time) for
                  four months.
                </StyledListItem>
                <StyledListItem>
                  In order to get the most out of the internship, Mandarin must be used a minimum of 85 percent of the time in
                  the company providing the internship.
                </StyledListItem>
                <StyledListItem>
                  Due to visa restrictions and Language Flagship policy, internships will not be paid.
                </StyledListItem>
                <StyledListItem>
                  An internship must be located within a distance that allows the student to attend the Friday
                  weekly class meetings on the National Yang-Ming University campus.
                </StyledListItem>
              </ul>
            </StyledText2>
            <StyledText2>
              Once an internship meets these requirements and satisfies the student’s professional interests has
              been secured, the application process will begin. First, the internship must be approved by the Internship
              Coordinator.
            </StyledText2>
            <StyledText2>
              <strong>
                Then, under the supervision of the Internship Coordinator,
                students are required to:
              </strong>
            </StyledText2>
            <StyledText2>
              <ul>
                <StyledListItem>
                  write a cover letter, in Chinese, applying for the position
                </StyledListItem>
                <StyledListItem>
                  create a culturally appropriate resumé and biography, in Chinese
                </StyledListItem>
                <StyledListItem>
                  learn how to conduct themselves at the interview for the position
                </StyledListItem>
                <StyledListItem>
                  take part in an orientation course to learn workplace etiquette, how to best interact with colleagues
                  and workplace supervisors, communication tips (both speaking and writing), and other important aspects
                  of Chinese professional life
                </StyledListItem>
              </ul>
            </StyledText2>
            <StyledText2>
              In this way, students will apply and be best prepared to intern at a Chinese business or organization.
            </StyledText2>
           
          </div>
        </div>
      </React.Fragment>
    );
  }
}
