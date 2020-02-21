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
                  value: '$500',
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
                  label: 'VISA HEALTH CERTIFICATION',
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
                  label: 'NYMU DORMITORY',
                  value: '$2,200',
                },
                {
                  label: 'MATTRESS, BEDDING, PILLOW',
                  value: '$250',
                },
                {
                  label: 'INTERNET',
                  value: '$50',
                },
                {
                  label: 'UTILITIES',
                  value: '$50',
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
                  label: 'BOOKS AND SUPPLIES',
                  value: '$200',
                },
                {
                  label: 'FOOD/MEALS/INCIDENTALS',
                  value: '$850',
                },
                {
                  label: 'MOBILE PHONE',
                  value: '$50',
                },
                {
                  label: 'CHECKED BAGS',
                  value: '$100',
                },
              ]}
              lastRow={{
                label: 'Grand Total',
                value: '$18,495',
              }}
            />
          </div>

          <div style={{color: 'red', fontSize:'20px'}}> PLEASE NOTE: Students who wish to travel independently during weekends/school breaks should budget at least an additional $1,500 of personal finances for this purpose. </div>
         
        </div>
      </div>
    );
  }
}
