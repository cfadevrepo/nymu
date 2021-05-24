import React from 'react';
import {
  StyledTitle,
  StyledText,
  StyledTableTitle,
  StyledListItem,
} from './program.styles';
import ArrowRight from '@material-ui/icons/ArrowRight';
import LearnMore from './LearnMore';

export default class ProgramOverviewOrientationInformation extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
          <div className="section-container">
            <StyledTitle>
              Orientation Information
            </StyledTitle>
            <StyledTableTitle>
              Safety and Security Briefing webinar:
            </StyledTableTitle>
            <StyledText>
              Students are required to attend a webinar, which includes, among other things, the following topics:
            </StyledText>
            <ul>
              <StyledListItem>
                Mental health while abroad
              </StyledListItem>
              <StyledListItem>
                Sexual harassment/assault, and Title IX
              </StyledListItem>
              <StyledListItem>
                Theft, scams, and cyber attacks
              </StyledListItem>
              <StyledListItem>
                Cultural awareness and risk management
              </StyledListItem>
            </ul>
            <br />
            <StyledTableTitle>
              Pre-Departure Orientation webinar:
            </StyledTableTitle>
            <StyledText>
              This webinar covers all aspects of the Chinese Flagship Overseas Capstone Program in Taiwan, including:
            </StyledText>
            <ul>
              <StyledListItem>
                Details of the academic program
              </StyledListItem>
              <StyledListItem>
                The internship
              </StyledListItem>
              <StyledListItem>
                Living in Taipei -- housing, finances, cultural challenges, health and safety
              </StyledListItem>
              <StyledListItem>
                A question and answer session
              </StyledListItem>
            </ul>
            <br />
              
            <br />
            <br />
            <StyledTableTitle>
              In-Country Orientation
            </StyledTableTitle>
            <StyledText>
              Taiwan Program students will arrive in Taipei excited about their year abroad and eager to begin life in a
              different country and culture. But adjusting to such a new and different place can be difficult.
              Everything -- the food, the money, the transportation system, the teaching style of the professors, the
              interactions in marketplaces, and so much more -- is different than it is back home in the U.S.
            </StyledText>
            <StyledText>
              To help students as they transition to the culture and city that will be their home for a year, the Taiwan
              Center staff will run a week-long orientation program. There will be presentations and an opportunity for questions and answers, and students will be taken on walking tours of the National Yang Ming Chiao University (NYCU) Yangming Campus
              and surrounding neighborhoods. There may be a group trip to a nearby historic site or an outing to a
              popular restaurant, and there will be other events to welcome the students to Taipei.
            </StyledText>
            <StyledText>
              The In-Country Orientation is an opportunity for students to get to know the staff and advisors at the Taiwan Center
              and their fellow participants in the Taiwan Program. There will be a Language
              Pledge, where students sign a pledge to speak only Mandarin Chinese for the duration of the program. 
				
			  Students will pay their tuition
              and fees to NYCU, settle into their dorm rooms, obtain their Alien Resident Certificate (ARC) cards, set up bank accounts, buy supplies, and ready
              themselves for a demanding year of study and immersion in the new environment of Taipei and NYCU.
            </StyledText>
          </div>
        </div>
      </div>
    );
  }
}
