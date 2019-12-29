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
              Dates for the Fall 2020-Spring 2021 cohort. (These timelines are subject to change.) 
            </StyledSubtext>
            <br />
            <StyledTableTitle>
              Tentative Dates for 2020-2021 Fall - Spring Cohort:
            </StyledTableTitle>
            <Table
              title={[
                'Date',
                'Event',
              ]}
              rows={[
                {
                  label: 'August 30, 2020',
                  value: 'Students arrive in Taiwan',
                },
                {
                  label: 'August 31 - September 4, 2020',
                  value: 'In-country orientation',
                },
                {
                  label: 'September 7, 2020',
                  value: 'Classes begin',
                },
                {
                  label: 'November 9-13, 2020',
                  value: 'Midterm Exams',
                },
  
                {
                  label: 'January 4-8, 2021',
                  value: 'Final Exams',
                },
          
                {
                  label: 'January 11-31, 2021',
                  value: 'Winter Break',
                },
					  
                {
                  label: 'February 1, 2021',
                  value: 'Internships begin',
                },
                {
                  label: 'May 21, 2021',
                  value: 'Internships end',
                },
                {
                  label: 'May 24 - June 11, 2021',
                  value: 'Superior-Level Language Practicum',
                },
     
                {
                  label: 'June 14-18, 2021',
                  value: 'Exit Proficiency Tests',
                },
                {
                  label: 'June 19, 2021',
                  value: 'Closing ceremony and farewell party',
                },
           
                {
                  label: 'June 26, 2021',
                  value: 'Flagship students return to U.S. on or before June 26',
                },
              ]}
            />
            <br />
            <br />
            <StyledTableTitle>
              Key Dates for 2021 Spring - Fall Cohort (to be determined)
            </StyledTableTitle>
          
            <br />
            <br />
            <p>
              In addition to the dates outlined above, the following regular activities will be offered to both
              cohorts by the Taipei Flagship Overseas Center:
            </p>
            <ul>
              <StyledListItem>
                Guest speaker events, four times per semester.
              </StyledListItem>
              <StyledListItem>
                Students to explore Taipei on weekends with local friends.
              </StyledListItem>
              <StyledListItem>
                Students are required to join at least one NYMU club.
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
                During their free time, students are encouraged to join all events organized by NYMU.
              </StyledListItem>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
