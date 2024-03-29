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
                    National Yang Ming Chiao Tung University
                  </StyledSkinnyTitle>
                  {/* <p>
                  Founded in 1975, <a href="https://nymu-e.ym.edu.tw/bin/home.php"> National Yang Ming Chiao Tung University</a>  (NYCU) is a top public university which includes seven different colleges, including the School of Biomedical Science and Engineering, the School of Life Sciences, and the School of Humanities and Social Sciences. In addition, NYCU has more than 20 research centers with an emphasis on cancer and immunology, brain research, biophotonics, aging and health, and biomedical engineering. 
                  </p> */}
                  <p>
                  On February 1, 2021, after twenty years of planning, National Yang-Ming University merged with National Chiao Tung University, becoming National Yang Ming Chiao Tung University, known by the acronym NYCU. The merger greatly benefits both institutions -- and their students -- as they will be able to broaden their academic disciplines and share resources, giving the newly combined university a competitive edge. Further, by uniting their areas of expertise – for NYMU it has been medicine and biotechnology, and for NCTU it has been electrical engineering and computer science – NYCU will be strongly aligned with Taiwan’s goal of becoming known globally for its smart healthcare and biomedical industries, while still having access to top notch courses in the humanities and social sciences.
                  </p>
                  <p>
                  The Yangming Campus is located in northern Taipei, in the Beitou district, and is where the Taiwan Center is based. This campus offers students both a beautiful location and easy access to the city. The Yangming Campus includes seven different colleges, including the School of Biomedical Science and Engineering, the School of Life Sciences, and the School of Humanities and Social Sciences, and has more than 20 research centers with an emphasis on cancer and immunology, brain research, biophotonics, aging and health, and biomedical engineering.
                  </p>
                    <p>
                    The Chiaotung Campus is in Hsinchu, a city south of Taipei and the hub of Taiwan’s semi-conductor industry, about an hour’s drive from Taipei. 
                    </p>
					<p>
					As Taipei is the political and economic center of Taiwan, Flagship students are easily able to make academic and professional connections in both Taiwanese society and with global communities and companies that have a base in Taipei. 
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
			
		{/* 
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
			*/}
			
			
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
offerings at NYCU, all taught in Chinese. Each course has no more than 30 students to facilitate teacher
and student discussions. Students will be guided to enroll in a course of choice before they depart for
Taiwan. Students can add or drop during the first two weeks of the semester. 
				  
				  {/* 
				  Please check out the courses offered during the 2019-2020 academic year <a href="https://docs.google.com/spreadsheets/d/1RoLxiYgpjLLRrwf4F6LzDAVSBqPlah579dCECkvKWCQ/edit?urp=gmail_link"> here </a>.
				  */}
				  
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
              NYCU provides plenty of facilities on campus, including a comprehensive sports center (which includes a swimming pool), a computer center, the library and many other resources, and a wide variety of student clubs and groups that Capstone Program participants can — and are encouraged to — join. Some facilities do require a fee. Flagship students will be paying the same rate as NYCU students. The NYCU campus is very close (just a few subway stops away) to the most famous Shi Lin Night Market, National Palace Museum, as well as relaxing hot springs and many other sightseeing spots.
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
            NYCU Resources
          </StyledSkinnyTitle2>
          <StyledShortUnderline
            style={{
              margin: 'auto',
            }}
          />
          <br/>
          
            <Grid item>
              <ul
                style={{
                  listStyle: 'none',
                  textAlign: 'center',
                }}
              >
				  
				{/* 
                <StyledListItem>
                  <LearnMore
                    text="National Yang Ming Chiao Tung University (NYCU)"
                    center={false}
					 href="https://nymu-e.ym.edu.tw/bin/home.php" 
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NYCU Achievements"
                    center={false}
					 href = "https://www.ym.edu.tw/top/english/index.html"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
				*/}
				  
                <StyledListItem>
                  <LearnMore
                    text="Yang Ming Campus Map"
                    center={false}
					href ="https://web.ym.edu.tw/ezfiles/133/1133/img/1538/20190718map.png"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="Yang Ming Campus Library"
                    center={false}
					 href="https://www.ym.edu.tw/lib/Floor/floor.html"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NYCU International Affairs Office"
                    center={false}
					href = "https://oia.nycu.edu.tw/"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="Yang Ming Campus Dormitory Photos"
                    center={false}
					
					href= "https://dorm.sa.nycu.edu.tw/files/13-1208-28051.php"
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
