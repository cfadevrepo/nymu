import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  StyledSkinnyTitle,
  StyledSkinnyText,
  StyledSKinnyDescription,
  StyledShortUnderline,
  StyledProgramGuideContainer,
  StyledGuideLabel,
  StyledLink,
  StyledText,
  StyledUserLinksContainer,
  StyledSkinnyTitle2,
  StyledListItem,
  StyledLargeNumber,
  StyledLargeNumberSubtext,
} from './program.styles';
import {
  StyledSectionImage,
} from './core.styles';
import AssetStore from '../../lib/AssetStore';
import LearnMore from './LearnMore';

export default class YangMingUniversityIntroduction extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          className="home-section-info"
          style={{
            backgroundColor: '#f7f5ff',
          }}
        >
          <div className="home-section-info-wrapper">
            <Grid
              container
              className="home-eligible-container"
              alignItems="center"
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <div className="home-eligible-wrapper">
                  <StyledSkinnyTitle>
                    National Yang Ming University
                  </StyledSkinnyTitle>
                  <p>
                  Founded in 1975, <a href="https://nymu-e.ym.edu.tw/bin/home.php"> National Yang Ming University</a>  (NYMU) was formerly known as National Yang-Ming College of Medicine. In 1994, it became the first medicine-oriented comprehensive university in Taiwan. As time went on, it established its School of Medical Technology and Engineering (renamed as the School of Biomedical Science and Engineering in 2007), as well as the School of Life Sciences, the Center for General Education, the School of Nursing, and the School of Dentistry. In 2007, the School of Humanities and Social Sciences was established, and in 2008, the Center for General Education was folded into this School. In 2015, the School of Pharmaceutical Sciences officially launched its operation. In addition, NYMU has more than 20 research centers with an emphasis on cancer and immunology, brain research, biophotonics, aging and health, and biomedical engineering.		
                  </p>
                  <p>
                  The School of Humanities and Social Sciences offers a wide range of general education courses: politics, economics, social studies, history, philosophy, art, psychology, etc. The central aim of these courses is to ensure that NYMU students, who often are natural science focused, acquire a firm grounding in the humanities and social sciences.	
                  </p>
                  <p>
                  Today NYMU is a top public university in the fields of medical and life sciences in Asia. With innovative and advanced education and training methods, the university is dedicated to foster the next generation of professional clinicians, health care practitioners, and scientists.	
                  </p>
                  <p>
                  While located in Taipei city, the biggest city in Taiwan, the NYMU campus sits at the foothill of Yang-Ming mountain and offers students both a beautiful campus and easy access to the city. As Taipei is the political and economic hub of Taiwan, NYMU students are easily able to make academic and professional connections in both Taiwanese society and with global communities and companies that have a base in Taipei.
                    </p>
                    <p>
                    NYMU’s Office of International Affairs (OIA) administers the university’s international initiatives and work toward globalization, while also providing services in admission, orientation, counseling, as well as assistance to all international students and scholars. Staff members at OIA are committed to helping international students transition into the new environment and culture during their educational journey.
                    </p>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                style={{
                  textAlign: 'center',
                }}
              >
                <StyledSectionImage
                  alt="campus"
                  src={AssetStore.get('assets/images/nymu5.png')}
                  maxWidth="583"
                  maxHeight="459"
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{
            textAlign: 'center',
          }}
        >
          <Grid
            item
            xs={6}
            sm={4}
          >
            <StyledLargeNumber>
              7
              <StyledLargeNumberSubtext>
                COLLEGES
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            style={{
              backgroundColor: '#f9f9f9',
            }}
          >
            <StyledLargeNumber>
              72
              <StyledLargeNumberSubtext>
                DEPARTMENTS
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
          >
            <StyledLargeNumber>
              11
              <StyledLargeNumberSubtext>
                UNDERGRADUATE PROGRAMS
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            style={{
              backgroundColor: '#f9f9f9',
            }}
          >
            <StyledLargeNumber>
              4,334
              <StyledLargeNumberSubtext>
                STUDENTS
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
          >
         <img  src={AssetStore.get('assets/images/nymu1.jpg')} width='300px' height='200px' />
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            style={{
              backgroundColor: '#f9f9f9',
            }}
          >
            <StyledLargeNumber>
              34
              <StyledLargeNumberSubtext>
                MASTER PROGRAMS
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
          >
            <StyledLargeNumber>
              410
              <StyledLargeNumberSubtext>
                FULL TIME FACULTY MEMBERS
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            style={{
              backgroundColor: '#f9f9f9',
            }}
          >
            <StyledLargeNumber>
              1,376 
              <StyledLargeNumberSubtext>
              PART-TIME FACULTY
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
          >
            <StyledLargeNumber>
              28
              <StyledLargeNumberSubtext>
                PhD PROGRAMS
              </StyledLargeNumberSubtext>
            </StyledLargeNumber>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: 'right',
            }}
          >
            <StyledSectionImage
              src={AssetStore.get('assets/images/nymu-courses.jpg')}
              alignRight
              maxWidth="730"
              maxHeight="469"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <StyledSkinnyText>
              <StyledSkinnyTitle>
                Courses
              </StyledSkinnyTitle>
              <StyledShortUnderline />
              <StyledSKinnyDescription>
                Whether your area of interest is business, art history, computer science, music, psychology, economics,
                or virtually any other academic area, NYMU provides thousands of courses, beginning with undergraduate
                level classes through to graduate level. 
				</StyledSKinnyDescription>
            </StyledSkinnyText>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: 'left',
            }}
          >
            <StyledSkinnyText>
              <StyledSkinnyTitle>
                Campus Life
              </StyledSkinnyTitle>
              <StyledShortUnderline />
              <StyledSKinnyDescription>
                NYMU provides plenty of facilities on campus, including a comprehensive sports center (which includes a
                swimming pool), a computer center, the library and many other resources, and hundreds of student clubs and
                groups that Capstone Program participants can — and are encouraged to — join.
              </StyledSKinnyDescription>
            </StyledSkinnyText>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: 'left',
            }}
          >
            <StyledSectionImage
              src={AssetStore.get('assets/images/nymu6.jpg')}
              alignRight
              maxWidth="709"
              maxHeight="427"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: 'right',
            }}
          >
            <StyledSectionImage
              src={AssetStore.get('assets/images/nymu7.jpg')}
              alignRight
              maxWidth="730"
              maxHeight="469"
            />
          </Grid>
        </Grid>
        <br />
          <br />
          <br />
          <br />
      </div>
    );
  }
}
