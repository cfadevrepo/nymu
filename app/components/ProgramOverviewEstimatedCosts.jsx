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
			
          <div className="section-container">
            <StyledTableTitle>
              1. Tuition and Academic Expenses
            </StyledTableTitle>
            <Table
              width="75%"
              rows={[
                {
                  label: 'TUITION TO OVERSEAS INSTITUTION',
                  value: '$500',
                },
                {
                  label: 'ADMINISTRATIVE FEES',
                  value: '$1,600',
                },
		        {
                  label: 'BOOKS AND SUPPLIES',
                  value: '$100',
                },
              ]}
            />
            <br />
            <br />
            <StyledTableTitle>
              2. International Travel
            </StyledTableTitle>
            <Table
              width="75%"
              rows={[
                {
                  label: 'VISA',
                  value: '$160',
                },
                {
                  label: 'VISA HEALTH CERTIFICATE CERTIFICATION',
                  value: '$15',
                },
                {
                  label: 'ALIEN RESIDENT CERTIFICATE (ARC) CARD',
                  value: '$50',
                },
                {
                  label: 'INSURANCE',
                  value: '$620',
                },
              ]}
            />
            <br />
            <br />
            <StyledTableTitle>
              3. Lodging
            </StyledTableTitle>
            <Table
              width="75%"
              rows={[
                {
                  label: 'NYCU DORMITORY',
                  value: '$2,250',
                },
                {
                  label: 'MATTRESS, BEDDING, PILLOW',
                  value: '$250',
                },
                {
                  label: 'INTERNET',
                  value: '$100',
                },
                {
                  label: 'UTILITIES',
                  value: '$750',
                },
              ]}
            />
            <br />
            <br />
            <StyledTableTitle>
              4. Estimated Additional Expenses
            </StyledTableTitle>
            <Table
              width="75%"
              rows={[
                {
                  label: 'AIRFARE',
                  value: '$2,500',
                },
                {
                  label: 'LOCAL TRANSPORTATION',
                  value: '$1,000',
                },
                {
                  label: 'FOOD/MEALS/INCIDENTALS',
                  value: '$8,500',
                },
                {
                  label: 'MOBILE PHONE',
                  value: '$500',
                },
                {
                  label: 'CHECKED BAGS',
                  value: '$200',
                },
              ]}
              lastRow={{
                label: 'Grand Total',
                value: '$19,095',
              }}
            />
          </div>

          <div style={{color: 'black', fontSize:'20px'}}> Due to the ongoing pandemic, there may be additional quarantine costs. Please speak with your domestic program coordinator. </div>
			
		  <br />
			
          <div style={{color: 'red', fontSize:'20px', textDecoration:'underline'}}> PLEASE NOTE: Students who wish to travel independently during weekends/school breaks should budget at least an additional <b>$1,500</b> of personal finances for this purpose. </div>
         
        </div>
      </div>
    );
  }
}
