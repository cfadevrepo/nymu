import React from 'react';
import {
  StyledText,
  StyledText2,
  StyledListItem,
  StyledTitle,
} from './program.styles';

export default class AcademicsCreditsTranscript extends React.PureComponent {
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
              Credits
            </StyledTitle>
            <StyledText2>
              The Capstone Year Program at The Chinese Flagship Overseas Capstone Program in Taiwan is designed so students who complete
              all aspects of the program will earn 24 credits. The credits are broken down as follows:
            </StyledText2>
            
            <StyledText2
              style={{
                fontWeight: 'bold',
                marginBottom: 0,
              }}
            >
              First Semester:
            </StyledText2>
            <StyledText2>
              <ul>
                <StyledListItem>
                  Course 1: Intercultural Communications in Great China -- 3 credits
                </StyledListItem>
                <StyledListItem>
                  Course 2: Media in Contemporary Chinese Societies -- 3 credits
                </StyledListItem>
                <StyledListItem>
                  Course 3: NYMU Direct Enrollment Class -- 3 credits
                </StyledListItem>
                <StyledListItem>
                  Course 4: Domain Research Independent Project in Chinese -- 3 credits
                </StyledListItem>
              </ul>
              Total credits for First Semester: 12
            </StyledText2>
            
            <StyledText2
              style={{
                fontWeight: 'bold',
                marginBottom: 0,
              }}
            >
              Second Semester:
            </StyledText2>
            <StyledText2>
              <ul>
                <StyledListItem>
                  In-Service Internship -- 6 credits
                </StyledListItem>
		 <StyledListItem>	
                  Chinese for Professional Purposes -- 3 credits
                </StyledListItem>
                <StyledListItem>
                  Social and Political Affairs Studies in Chinese -- 3 credits
                </StyledListItem>
              </ul>
              Total credits for Second Semester: 12
              <br />
              <br />
              Total credits for Capstone Year program: 24
            </StyledText2>
            <StyledText>
               A student may not need all 24 credits in order to graduate. In this instance,
              the student can choose to only transfer the fall semester credits to their home institution. The student is required to
              take the three 12 credit spring classes, but they don't have to transfer over
              the credits if the credits are unnecessary.
            </StyledText>
            <StyledText>
              Students who want to find out if Capstone Year classes will affect their GPA, or if their home university offers a
              pass/fail option for study abroad credits, should speak with their home university’s Chinese Flagship
              program coordinator and/or study abroad office. (Pass/fail is not an option for Hunter College Flagship
              students.)
            </StyledText>
            <br />
            <StyledTitle
              style={{
                textAlign: 'left',
              }}
            >
              Transcripts
            </StyledTitle>
            <StyledText>
              Transcripts for the Chinese Flagship Overseas Capstone Program in Taiwan can be issued in two
              ways.
            </StyledText>
            <StyledText>
              If a student’s home university will accept a transcript from a foreign university, the student can receive
              a transcript directly from NYMU. At this time, there is no known timeline for delivery of the transcript. Please coordinate with program staff for an update.
            </StyledText>
            <StyledText>
              If a student’s home university requires a transcript from a U.S. institution, Hunter College will
              process the NYMU transcript and issue one from Hunter College. Students who have a transcript receipt deadline in
              order to graduate by a certain time should note: that it may take Hunter College as long as three months to
              process the NYMU transcript.
            </StyledText>
            <StyledText>
              <span style={{ color: 'red' }}>PLEASE NOTE:</span> Different universities have different rules about
              which transcripts they will accept, and how
              credits and grades affect GPA. International institutions are accepted at most American universities,
              but only if they meet strict accreditation standards. Students should speak to their home school’s
              Flagship program coordinator and/or study abroad office to find out their individual institution’s rules.
            </StyledText>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
