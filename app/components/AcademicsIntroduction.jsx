import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';
import {
  StyledSectionImage,
} from './core.styles';
import {
  StyledText2,
  StyledTableTitle,
  StyledTitle,
  StyledListItem,
} from './program.styles';

export default class AcademicsIntroduction extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="home-section-info">
          <div className="home-section-info-wrapper">
            <Grid
              container
              alignItems="center"
            >
              <StyledSectionImage
                alt="students"
                src={AssetStore.get('assets/images/academics-compressed.jpg')}
                maxWidth="500"
                maxHeight="386"
              />
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
              >
                <div
                  style={{
                    marginLeft: '20px',
                  }}
                >
                  <StyledText2>
                    Combining intensive language instruction and cultural immersion, The Language Flagship is a leader
                    in educating American undergraduate students in languages critical to U.S. National Security.
                    Capstone students are outstanding American undergraduates, from twelve universities across the U.S.,
                    who excel in in Mandarin and a professional domain.
                  </StyledText2>
                  <StyledText2>
                    Having completed the rigorous domestic training with a variety of courses, programs, and
                    extracurricular activities to ensure students gain exceptional proficiency in Mandarin Chinese, the
                    Capstone Year is the final component in attaining superior professional fluency in Chinese.
                  </StyledText2>
                </div>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <StyledTitle
              style={{
                textAlign: 'left',
              }}
            >
              Semester 1
            </StyledTitle>
            <StyledText2>
              During the first semester at the Taiwan Overseas Center, students will take five courses, each worth 1-3
              credits, for a total of 12 credits including:
            </StyledText2>
           
           
            <StyledTableTitle>
         Intercultural Communication in Greater China (3 credits)
            </StyledTableTitle>
			  
           
            <StyledTableTitle>
				  Media in Contemporary Chinese Societies (3 credits)
            </StyledTableTitle>
            
            <StyledTableTitle>
             Domain Research in Chinese (3 credits)
            </StyledTableTitle>
            
            <StyledTableTitle>
            Advanced Domain Studies in Chinese (1 credit)
            </StyledTableTitle>
            
            <StyledTableTitle>
             Direct Enrollment (2 credits) -- <a target="blank" href={AssetStore.get('assets/NYMU-Courses.pdf')}> Click here to see the list of possible NYMU Direct Enrollment classes </a>
            </StyledTableTitle>
            
           
            
            <StyledTitle
              style={{
                textAlign: 'left',
              }}
            >
              Semester 2
            </StyledTitle>
            <StyledText2>
              The second semester in Taipei is comprised of the following courses, one worth 6 credits, and two worth 3 credits, for a total of 12 credits:
            </StyledText2>
			  
			
            <StyledTableTitle>
             In-Service Internship (6 credits)
			</StyledTableTitle>

            <StyledTableTitle>
             Chinese for Professional Purposes (3 credits)
			</StyledTableTitle>
			    
           
            <StyledTableTitle>
              Social and Political Affairs Studies in Chinese (3 credits)
            </StyledTableTitle>
           
			</div>
        </div>
      </React.Fragment>
    );
  }
}
