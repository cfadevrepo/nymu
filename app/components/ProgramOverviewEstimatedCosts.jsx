import React from 'react';
import {
  StyledTitle,
  StyledText,
  StyledTableTitle,
} from './program.styles';
import Table from './Table';

export default class ProgramOverviewEstimatedCosts extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
			
			
		  <div style={{color: 'black', fontSize:'20px'}}> The estimated costs below are for planning purposes for a typical year. </div>
			
		  <br />
			
		  <div style={{color: 'black', fontSize:'20px'}}> Estimated additional expenses are included for planning purposes only. </div>
			
          <div className="section-container">
            <Table
              width="75%"
              rows={[
                {
                  label: 'I. Academic Expenses (Administrative Fees, Tuition, and Learning Materials): ',
                  value: '$2,200',
                },
                {
                  label: 'II. International Travel (Visa, Visa Health Certificate Certification, Required COVID-19 testing, Resident Visa, Resident Visa Health Check-Up, Alien Resident Certificate/ARC Card, NYCU New Students Health Examination Form, and Insurance):',
                  value: '$1,840',
                },
		        {
                  label: 'III. Lodging (NYCU Dormitory, Mattress, Bedding, Pillow, Internet, and Utilities):',
                  value: '$4,662',
                },
			    {
                  label: 'IV. Estimated Additional Expenses (Airfare, Local Transportation, Food/Meals/Incidentals, Mobile Phone, and Checked Bags): ',
                  value: '$12,500',
                },
				{
                  label: 'V. Estimated Quarantine Related Expenses (Accommodation for the first quarantine hotel, Accommodation for the second quarantine hotel, Meals when staying at the second quarantine hotel, Quarantine-Required Rented Taiwanese Cell Phone, Quarantine Transportation, and Wi-Fi Booster Rental): ',
                  value: '$2,222',
                },
              ]}
			  lastRow={{
                label: 'ESTIMATED GRAND TOTAL: ',
                value: '$23,424',
              }}
			  
            />


          </div>
			
          <div style={{color: 'black', fontSize:'20px'}}> The amounts on this worksheet are subject to change, and are for estimation purposes only. All amounts are in US$.</div>
			
		  <br />

          <div style={{color: 'black', fontSize:'20px'}}> Due to the ongoing pandemic, there may be additional quarantine costs. Please speak with your domestic program coordinator. </div>
			
		  <br />
			
          <div style={{color: 'red', fontSize:'20px', textDecoration:'underline'}}> PLEASE NOTE: Students who wish to travel independently during weekends/school breaks should budget at least an additional <b>$1,500</b> of personal finances for this purpose. </div>
         
        </div>
      </div>
    );
  }
}
