import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  StyledTitle,
  StyledText,
  StyledTableTitle,
} from './program.styles';

export default class ContactTeam extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
          <div className="section-container">
            <StyledTitle>
              Contact Us
            </StyledTitle>
            <StyledText
              style={{
                textAlign: 'center',
              }}
            >
              Please feel free to contact us with any questions.
            </StyledText>
            <br />
            <br />
            <Grid
              container
              justify="center"
              alignItems="flex-start"
            >
              <Grid
                item
                xs={12}
                sm={6}
              >
                <StyledTableTitle>
                  U.S. Project Support Center
                </StyledTableTitle>

                <strong>
                  Hunter College Chinese Flagship Center, Taiwan Program
                </strong>
                <StyledText>
                  Hunter College, CUNY, HW 1425<br />
                  695 Park Avenue<br />
                  New York, NY 10065
                </StyledText>
                <br /><br />
                <strong>
                  Ms. Sam Maser
                </strong>
                <StyledText>
                  U.S. Project Coordinator<br />
                  taipeicapstone@hunter.cuny.edu<br />
                  (212) 772-5163<br />
                </StyledText>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <form noValidate method="POST" action="/taiwanoverseas/contact-us" autoComplete="off">
                  <TextField
		    name="name" 
                    id="name"
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    style={{
                      width: '400px',
                    }}
                  />
                  <TextField
		    name="email"	
                    id="email"
                    label="E-mail"
                    margin="normal"
                    variant="outlined"
                    style={{
                      width: '400px',
                    }}
                  />
                  <TextField
		    name="phone"
                    id="phone"
                    label="Phone"
                    margin="normal"
                    variant="outlined"
                    style={{
                      width: '400px',
                    }}
                  />
                  <TextField
		    name="message"
                    id="message"
                    label="Message"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={2}
                    rowsMax={4}
                    style={{
                      width: '400px',
                    }}
                  />
                  <div
                    style={{
                      marginTop: '10px',
                    }}
                  >
                    <Button
		      type="submit"
                      variant="contained"
                      color="default"
                      style={{
                        width: '400px',
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
