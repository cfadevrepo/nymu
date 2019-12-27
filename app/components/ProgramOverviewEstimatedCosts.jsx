import React from 'react';
import {
  StyledTitle,
  StyledText,
  StyledTableTitle,
} from './program.styles';
import Table from './Table';

export default class ProgramOverviewEstimatedCosts extends React.PureComponent {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      items: [ 
        
        [ //state is by default an object[
        { id: 'Budget Categories', rate: 'Rate', period: 'Period', frequency: 'Frequency', cost: 'Cost',  notes:'Notes' },
          { id: 'Tuition to Overseas Institution', rate: '500', period: '1st Semester', frequency: 1, cost: 500,  notes:'Tuition for one 3-credit direct enrollment course and access to NYMU facilities' },
          { id: 'Wiring Costs', rate: '50', period: 'N/A', frequency: 4, cost: 200,  notes:'Every time funds are wired to Taiwan, there is a bank charge; your bank fees may vary.' },
          { id: 'Textbooks, Handouts, Materials', rate: '300', period: 'Academic Year', frequency: 1, cost: 300,  notes:'Paid to Taiwan Center on site' },
          { id: 'Administrative Fees', rate: '300', period: 'Academic Year', frequency: 1, cost: 300,  notes:'Administrative fees to Taiwan Program for facilitation of visas, internship contracts, transcripts, and other required documents.' },
      ], 

       [
        { id: 'Budget Categories', rate: 'Rate', period: 'Period', frequency: 'Frequency', cost: 'Cost',  notes:'Notes' },
          { id: 'Visa', rate: '160', period: 'Academic Year', frequency: 1, cost: 160,  notes:'Visa application fee to Taipei Economic and Cultural Office (TECO). There will be additional costs for a physical exam, any vaccinations, and passport photos.' },
          { id: 'Visa Health Certificate Certification', rate: '15', period: 'N/A', frequency: 1, cost: 15,  notes:"TECO charges this fee on top of the visa fee to certify a student's Health Certificate." },
          { id: 'Physician Appointment for Health Assessment/Vaccinations', rate: '150', period: 'N/A', frequency: 1, cost: 150,  notes:'In order to have the required Visa Health Certificate filled out, and to receive any suggested vaccinations students must visit their physician.' },
          { id: 'Travel to Regional TECO Office for Visa', rate: '50', period: 'N/A', frequency: 1, cost: 50,  notes:'While some of our students have been able to apply for their visas by mail, in some cases it may be necessary for students to travel to their regional TECO office and remain there for five days to obtain their visas.'},
          { id: 'Alien Resident Certificate (ARC) card', rate: '1,000', period: '5 days', frequency: 1000, cost: 300,  notes:'The ARC card functions as a visa extension, and permits students to travel in and out of Taiwan for a year.'},
          { id: 'Photos for ARC/Student ID/Membership Card', rate: '20', period: 'N/A', frequency: 1, cost: 20,  notes:'Taiwanese-sized head & shoulders photos in color with a white background'},
          { id: 'Updated ARC card for internship', rate: '50', period: 'N/A', frequency: 1, cost: 50,  notes:'It is required that students update their ARC cards to “work” status in order to do take part in the internship phase of the program'},
          { id: 'Insurance', rate: '620', period: 'Academic Year', frequency: 1, cost: 620,  notes:'Required CUNY accident and illness insurance provided by CISI. Includes medevac coverage.'},
        ],
        [
          { id: 'Budget Categories', rate: 'Rate', period: 'Period', frequency: 'Frequency', cost: 'Cost',  notes:'Notes' },
          { id: 'NYMU Dormitory', rate: '240', period: 'Month', frequency: '10-12', cost: 2880,  notes:'There are several options for dormitory housing at NYMU. The most expensive is a single room with private bath, for $1,440 per semester, or $240/month.  The least expensive is a room shared by four people, with a shared bath, for $690 per semester, or $160/month.  The dormitory also offers access to a basic kitchen and a laundry room.' },
            { id: 'NYMU Dormitory Security Deposit', rate: '70', period: '1 Semester', frequency: 2, cost: 140,  notes:'A refundable security deposit of $70 per semester; returned to student if room is in good order.' },
            { id: 'Mattress, Bedding, Pillow', rate: '250', period: 'N/A', frequency: 1, cost: 250,  notes:"Taiwanese dormitories do not come with mattresses or bedding, which must be purchased upon arrival." },
            { id: 'Internet', rate: '35', period: 'Month', frequency: '10-12', cost: 420,  notes:'Local Internet cost'},
            { id: 'Utilities', rate: '45', period: 'Month', frequency: '10-12', cost: 540,  notes:'Water, gas, electricity, air conditioning'},
          ],
      [
        { id: 'Budget Categories', rate: 'Rate', period: 'Period', frequency: 'Frequency', cost: 'Cost',  notes:'Notes' },
        { id: 'Airfare', rate: '2,400', period: 'Round Trip', frequency: 1, cost: 2400,  notes:'Round-trip airfare: from US to Taiwan and Taiwan to US (must be American  Carrier, based on the current airfare range)' },
        { id: 'In-country Travel and Local Transportation', rate: '3000', period: 'N/A', frequency: 1, cost: 3000,  notes:'In-country travel ($2,500), local transportation ($50 x 10 months). Students will pay travel cost for program-organized trips or personal independent trips.' },
          { id: 'Food/Meals', rate: '500', period: 'Month', frequency: 10, cost: 5000,  notes:'Meals in Taipei ($500/month for 10 months)' },
          { id: 'Mobile Phone', rate: '40', period: 'Month', frequency: 10, cost: 400,  notes:"Monthly mobile fees (excluding the purchase of a phone)" },
          { id: 'Checked Bags', rate: '100', period: 'Trip', frequency: 2, cost: 200,  notes:"The first checked bag is free; the estimated cost of each additional bag is $100 per trip." },
        ]]
    }}
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
          <div className="section-container">
            <StyledTableTitle>
              1. Tuition and Program Fees
            </StyledTableTitle>
            <Table
              width="75%"
              rows={[
                {
                  label: this.state.items[0][1].id,
                  value: '$' + this.state.items[0][1].cost,
                },
                {
                  label: this.state.items[0][2].id,
                  value: '$' + this.state.items[0][2].cost,
                },
                {
                  label: this.state.items[0][3].id,
                  value: '$' + this.state.items[0][3].cost,
                },
                {
                  label: this.state.items[0][4].id,
                  value: '$' + this.state.items[0][4].cost,
                },
              ]}
            />
            <br />
            <br />
            <StyledTableTitle>
              2. Taiwanese Visa and Insurance
            </StyledTableTitle>
            <Table
              width="75%"
              rows={[
                {
                  label: this.state.items[1][1].id,
                  value: '$' + this.state.items[1][1].cost,
                },
                {
                  label: this.state.items[1][2].id,
                  value: '$' + this.state.items[1][2].cost,
                },
                {
                  label: this.state.items[1][3].id,
                  value: '$' + this.state.items[1][3].cost,
                },
                {
                  label: this.state.items[1][4].id,
                  value: '$' + this.state.items[1][4].cost,
                },
                {
                  label: this.state.items[1][5].id,
                  value: '$' + this.state.items[1][5].cost,
                },
                {
                  label: this.state.items[1][6].id,
                  value: '$' + this.state.items[1][6].cost,
                },
                {
                  label: this.state.items[1][7].id,
                  value: '$' + this.state.items[1][7].cost,
                },
                {
                  label: this.state.items[1][8].id,
                  value: '$' + this.state.items[1][8].cost,
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
                  label: this.state.items[2][1].id,
                  value: '$' + this.state.items[2][1].cost,
                },
                {
                  label: this.state.items[2][2].id,
                  value: '$' + this.state.items[2][2].cost,
                },
                {
                  label: this.state.items[2][3].id,
                  value: '$' + this.state.items[2][3].cost,
                },
                {
                  label: this.state.items[2][4].id,
                  value: '$' + this.state.items[2][4].cost,
                },
                {
                  label: this.state.items[2][5].id,
                  value: '$' + this.state.items[2][5].cost,
                },
              ]}
            />
              
            <br />
            <br />
            <StyledTableTitle>
              4. Estimated Travel and Living Expenses
            </StyledTableTitle>
            <Table
              width="75%"
              rows={[
                {
                  label: this.state.items[3][1].id,
                  value: '$' + this.state.items[3][1].cost,
                },
                {
                  label: this.state.items[3][2].id,
                  value: '$' + this.state.items[3][2].cost,
                },
                {
                  label: this.state.items[3][3].id,
                  value: '$' + this.state.items[3][3].cost,
                },
                {
                  label: this.state.items[3][4].id,
                  value: '$' + this.state.items[3][4].cost,
                },
                {
                  label: this.state.items[3][5].id,
                  value: '$' + this.state.items[3][5].cost,
                },
              ]}
              lastRow={{
                label: 'Grand Total',
                value: '$18,595',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}