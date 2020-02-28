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
import LazyBackgroundDimensions from './LazyBackgroundDimensions';

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
                    National Yang-Ming University
                  </StyledSkinnyTitle>
                  <p>
                  Founded in 1975, <a href="https://nymu-e.ym.edu.tw/bin/home.php"> National Yang-Ming University</a>  (NYMU) is a top public university which includes seven different colleges, including the School of Biomedical Science and Engineering, the School of Life Sciences, and the School of Humanities and Social Sciences. In addition, NYMU has more than 20 research centers with an emphasis on cancer and immunology, brain research, biophotonics, aging and health, and biomedical engineering. 
                  </p>
                  <p>
                  The School of Humanities and Social Sciences offers a wide range of general education courses: politics, economics, social studies, history, philosophy, art, psychology, and more. The central aim of these courses is to ensure that NYMU students acquire a firm grounding in a wide range of academic areas. With innovative and advanced education and training methods, one of the university’s goals  that every student must graduate having gained independent critical thinking skills, enhanced intellectual skills, and an international worldview. NYMU’s global outlook for its students resonates with The Language Flagship’s mission to educate global professionals.
                  </p>
                  <p>
                  While located in Taipei, the biggest city in Taiwan, the NYMU campus sits at the foothill of Yang-Ming mountain and offers students both a beautiful campus and easy access to the city. As Taipei is the political and economic hub of Taiwan, NYMU students are easily able to make academic and professional connections in both Taiwanese society and with global communities and companies that have a base in Taipei.
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
             <LazyBackgroundDimensions src={AssetStore.get('assets/images/nymu5.png')} placeholder={AssetStore.get('assets/images/nymu5-compressed.jpg')} width="583" height="459"/>
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
          <StyledSectionImage src={AssetStore.get('assets/images/nymu1-compressed.png')} maxWidth="200px" maxHeight="100px"/>  
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
         <LazyBackgroundDimensions src={AssetStore.get('assets/images/nymu-courses.png')} placeholder={AssetStore.get('assets/images/nymu-courses-compressed.jpg')} width="730" height="469"/>  
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <StyledSkinnyText>
              <StyledSkinnyTitle>
                Direct Enrollment Courses
              </StyledSkinnyTitle>
              <StyledShortUnderline />
              <StyledSKinnyDescription>
              Students can choose a direct enrollment course from more than 80 excellent interdisciplinary course
offerings at NYMU, all taught in Chinese. Each course has no more than 30 students to facilitate teacher
and student discussions. Students will be guided to enroll in a course of choice before they depart for
Taiwan. Students can add or drop during the first two weeks of the semester. Please check out the courses offered during the 2019-2020 academic year <a href="https://docs.google.com/spreadsheets/d/1RoLxiYgpjLLRrwf4F6LzDAVSBqPlah579dCECkvKWCQ/edit?urp=gmail_link"> here </a>.
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
              NYMU provides plenty of facilities on campus, including a comprehensive sports center (which includes
a swimming pool), a computer center, the library and many other resources, and a wide variety of
student clubs and groups that Capstone Program participants can — and are encouraged to — join.
Some facilities do require a fee. Flagship students will be paying the same rate as NYMU students. The
NYMU campus is very close (just a few subway stops away) to the most famous Shi Lin Night Market, as
well as relaxing hot springs and many other sightseeing spots.
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
          <LazyBackgroundDimensions src={AssetStore.get('assets/images/nymu6.png')} placeholder={AssetStore.get('assets/images/nymu6-compressed.jpg')} width="709" height="427"/>
 
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: 'right',
            }}
          >
           <LazyBackgroundDimensions src={AssetStore.get('assets/images/nymu7.png')} placeholder={AssetStore.get('assets/images/nymu7-compressed.jpg')} width="730" height="469"/>
          </Grid>
        <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: 'left',
            }}
          >
            <StyledUserLinksContainer>
          <StyledSkinnyTitle2>
            NYMU Resources
          </StyledSkinnyTitle2>
          <StyledShortUnderline
            style={{
              margin: 'auto',
            }}
          />
          <br/><br/>
          
            <Grid item>
              <ul
                style={{
                  listStyle: 'none',
                  textAlign: 'center',
                }}
              >
                <StyledListItem>
                  <LearnMore
                    text="National Yang-Ming University (NYMU)"
                    center={false}
					 href="https://nymu-e.ym.edu.tw/bin/home.php" 
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NYMU Achievements"
                    center={false}
					 href = "https://www.ym.edu.tw/top/english/index.html"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NYMU Campus Map"
                    center={false}
					href ="https://web.ym.edu.tw/ezfiles/133/1133/img/1538/20190718map.png"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="National Yang-Ming University Library"
                    center={false}
					 href="https://libweb-e.ym.edu.tw/files/11-1174-17-1.php"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NYMU International"
                    center={false}
					href = "https://oia.ym.edu.tw/index.php/en-gb/"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NYMU Dormitory Photos"
                    center={false}
					
					href= "https://dorm.ym.edu.tw/files/15-1208-28051,c31-1.php"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
              </ul>
            </Grid>
            </StyledUserLinksContainer>
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
