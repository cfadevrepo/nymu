import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';


import {
  StyledSectionImage,
} from './core.styles';
import {
  StyledText2,
  StyledTableTitle,
  StyledGuideLabel,
  StyledLink,
  StyledText,
} from './program.styles';
import LearnMore from './LearnMore';

export default class InternshipIntroduction extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper" >
          <Grid
            container
            alignItems="center"
			style={{    display: '-webkit-inline-box',}}  
          >
            <StyledSectionImage
              alt="students"
              src={AssetStore.get('assets/images/internship-hero.png')}
              maxWidth="500"
              maxHeight="429"
			  style={{padding:'25px',}}
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
				  minHeight: '700px',
				
                }}
              >
                <StyledTableTitle>
                  <strong>
                    Taipei Provides a Rich Array of Internship Possibilities
                  </strong>
                </StyledTableTitle>
                <StyledText2>
                  One of the primary goals of The Language Flagship is to help Flagship students attain a professional
                  level of fluency in their target language. To achieve this, students must use their target language
                  outside the classroom in a workplace setting.
                </StyledText2>
                <StyledText2>
                  To this end, the first four months of the second semester of the Capstone Year in Taipei is dedicated
                  to a mandatory in-service internship.
					<br></br>
                </StyledText2>



 <Grid
              item
              md={3}
              style={{
                textAlign: 'center',
                alignItems: 'center',
              }}
            >
              <img
                alt="Program Guide"
                src={AssetStore.get('assets/images/program-guide-2.png')}
                style={{
                  margin: 'auto',
                }}
              />
              <StyledGuideLabel>Internship Handbook</StyledGuideLabel>
              <p>
                <StyledLink
                  target="_blank"
                  href="/overseasintaipeifall2020fall2020/assets/resources/Internship_Handbook_FINAL_HIGH.pdf"
                >
                  DOWNLOAD
                </StyledLink>
              </p>
            </Grid>



            
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
