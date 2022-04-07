import React from 'react';
import AssetStore from '../../lib/AssetStore';
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
              Tentative Dates for 2021-2022 Fall - Spring Cohort: <a target="blank" href={AssetStore.get('assets/CFall2021Spring2022.pdf')}>Link </a>
            </StyledTableTitle>
              
			<StyledTableTitle>
              Tentative Dates for 2022 Spring - Fall Cohort: <a target="blank" href={AssetStore.get('assets/CSpringFall2022.pdf')}>Link </a>
            </StyledTableTitle>  
			
			<StyledTableTitle>
              Tentative Dates for 2022-2023 Fall - Spring Cohort: <a target="blank" href={AssetStore.get('assets/CFall2022Spring2023G1.pdf')}>Link 1</a>, <a target="blank" href={AssetStore.get('assets/CFall2022Spring2023G2.pdf')}>Link 2</a>
            </StyledTableTitle>  			  

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
