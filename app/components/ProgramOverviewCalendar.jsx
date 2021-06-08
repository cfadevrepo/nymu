import React from 'react';
import {
  StyledTitle,
  StyledSubtext,
  StyledTableTitle,
  StyledListItem,
} from './program.styles';
import Table from './Table';

export default class ProgramOverviewCalendar extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
          <div className="section-container">
            <StyledTitle>
              Calendar
            </StyledTitle>
            <StyledSubtext>
              Below you will find a preliminary calendar of Tentative
              Dates for the Fall 2021-Spring 2022 cohort. <br />
			  (These timelines are subject to change.) 
            </StyledSubtext>
            <br />
            <StyledTableTitle>
              Tentative Dates for 2021-2022 Fall - Spring Cohort:
            </StyledTableTitle>
            <Table
              title={[
                'Date',
                'Event',
              ]}
              rows={[
                {
                  label: 'September 2 through 10, 2021',
                  value: 'In-country orientation',
                },
                {
                  label: 'September 13, 2021',
                  value: 'NYCU Semester 1 begins',
                },
                {
                  label: 'December 27-30, 2021',
                  value: 'NYCU Semester 1 Final Exams',
                },
                {
                  label: 'January 3-7, 2022',
                  value: 'End of Semester Oral Presentations on January 3; Mid-Year Proficiency Tests January 4-7',
                },
  
                {
                  label: 'January 8 to February 13, 2022',
                  value: 'Winter Break (Chinese New Year, February 1-6)',
                },
          
                {
                  label: 'February 14, 2022',
                  value: 'NYCU Semester 2 begins',
                },
					  
                {
                  label: 'May 30-June 3, 2022',
                  value: 'NYCU Semester 2 Final Exams',
                },
                {
                  label: 'June 6-17, 2022',
                  value: 'Soperior-Level Language Practicum',
                },
                {
                  label: 'June 20-24, 2022',
                  value: 'Exit Proficiency Tests',
                },
                {
                  label: 'June 30, 2022',
                  value: 'Flagship students return to U.S. on or before June 30',
                },
              ]}
            />
            <br />
            <br />
            <StyledTableTitle>
              Key Dates for 2022 Spring - Fall Cohort to be determined
            </StyledTableTitle>
          
            <br />
            <br />
            <p>
              In addition to the dates outlined above, the following regular activities will be offered to both
              cohorts by the Taiwan Flagship Overseas Center:
            </p>
            <ul>
              <StyledListItem>
                Guest speaker events, four times per semester.
              </StyledListItem>
              <StyledListItem>
                Students to explore Taipei on weekends with local friends.
              </StyledListItem>
              <StyledListItem>
                Students are required to join at least one NYCU club.
              </StyledListItem>
              <StyledListItem>
                The Resident Director will host a monthly meeting to discuss life in Taipei.
              </StyledListItem>
              <StyledListItem>
                The Site Director and faculty advisors will meet with students each month for 10-15 minute
                individual conferences.
              </StyledListItem>
              <StyledListItem>Students can join day-long trips, organized by the Taiwan Center, during the semester as long as they
                don’t conflict with classes or activities.
              </StyledListItem>
              <StyledListItem>
                During their free time, students are encouraged to join all events organized by NYCU.
              </StyledListItem>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
