import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';
import {
  StyledTitle,
  StyledText,
  StyledTableTitle,
  StyledListItem,
  StyledUnderline,
} from './program.styles';
import LearnMore from './LearnMore';


export default class YangMingUniversityHousingOptions extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper">
          <div className="section-container">
          <Grid container spacing={1}>
            <Grid item xs={6}>
            <StyledTitle>
              Housing 
            </StyledTitle>
            <StyledTableTitle>
              All Flagship Students Will Live on Campus
            </StyledTableTitle>
            <StyledText>
            The Chinese Overseas Flagship in Taiwan Program has coordinated with the Office of Student Affairs at NYMU to provide Capstone Program students excellent accommodations in Dormitory #5.
            </StyledText>
            <StyledText>
            Dormitory #5 -- with one building for male students and one for female students -- is conveniently located on campus and provides quick accessibility to classes.
            </StyledText>
            <StyledText>
            Pending availability, students will have several dorm options. The most expensive is a private bedroom with a small private bathroom. The mid-range is a double, with a bathroom shared by two. The least expensive dorm arrangement is a quad, with four students sharing a large bedroom and a bathroom. Dormitory #5 also has common spaces, including very basic kitchens, laundry rooms, lounges, and study and workout spaces. Electricity, cable, and internet are not included in rent and must be paid separately.
            </StyledText>
            <StyledText>
            Students who choose a double or quad room will be rooming with Taiwanese students, which is an excellent way for students to increase their target language fluency, and gain firsthand cultural understanding.
            </StyledText>
            </Grid>

          <Grid item xs={6}>
            <br/> <br/> <br/> <br/> <br/>

          <img
                  alt="campus"
                  src={AssetStore.get('assets/images/dorm.png')} 
                  width='500px' 
                  height='400px'
                  align='right'
                  className="home-campus-logo"
                />

          </Grid>
          </Grid>
            <StyledText>
              <strong>Dormitory #5 rooms include:</strong>
            </StyledText>
            <ul>
              <StyledListItem>
                Bed Frame (there is no mattress; one can be purchased at NYMU or elsewhere)
              </StyledListItem>
              <StyledListItem>
                Desk and chair
              </StyledListItem>
              <StyledListItem>
                Clothing wardrobe
              </StyledListItem>
              <StyledListItem>
                Bureau
              </StyledListItem>
              <StyledListItem>
               Bathroom (either private, shared with one other, or with three others)
              </StyledListItem>
              <StyledListItem>
              Access to basic kitchen, laundry room, common lounges, study area, workout room
              </StyledListItem>
              <StyledListItem>
              Students will be expected to abide by the dorm regulations, provide a clean and quiet living space, and, most importantly, respect other students and roommates.
              </StyledListItem>
            </ul>
            <br />
            <StyledTableTitle>
				    See photos of Dormitory #5 <a href={"https://dorm.ym.edu.tw/files/15-1208-28051,c31-1.php"}> here </a>.
            </StyledTableTitle>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
