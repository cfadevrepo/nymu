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

export default class TaiwanUniversityIntroduction extends React.PureComponent {
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
                    National Taiwan University
                  </StyledSkinnyTitle>
                  <p>
                    National Taiwan University (NTU) is one of the top universities in Taiwan, and has produced many
                    notable alumni, including four Presidents of Taiwan and the Nobel Prize in Chemistry laureate Yuan
                    T. Lee, among numerous others. Founded in 1928, NTU has developed into an internationally
                    respected research university; the main campus is situated in Taipei, the capital of Taiwan.
                  </p>
                  <p>
                    As Taipei is the political and economic hub of Taiwan, NTU students are easily able to make
                    academic and professional connections in both Taiwanese society and with global communities and
                    companies that have a base in Taipei. NTU’s diverse student body and highly-rated academic
                    offerings, in combination with the University’s international environment, attract thousands of
                    students to study at NTU every year.
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
                  src={AssetStore.get('assets/images/ntu-2.jpg')}
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
              11
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
              56
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
              112
              <StyledLargeNumberSubtext>
                GRADUATE PROGRAMS
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
              31,000
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
            <StyledLargeNumber>
              2,000
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
              5,200
              <StyledLargeNumberSubtext>
                INTERNATIONAL STUDENTS FROM 66 COUNTRIES
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
              src={AssetStore.get('assets/images/ntu-3.jpg')}
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
                or virtually any other academic area, NTU provides thousands of courses, beginning with undergraduate
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
                NTU provides plenty of facilities on campus, including a comprehensive sports center (which includes a
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
              src={AssetStore.get('assets/images/ntu-4.jpg')}
              alignRight
              maxWidth="709"
              maxHeight="427"
            />
          </Grid>
        </Grid>
        <br />
        <StyledUserLinksContainer>
          <StyledSkinnyTitle2>
            NTU Resources
          </StyledSkinnyTitle2>
          <StyledShortUnderline
            style={{
              margin: 'auto',
            }}
          />
          <br />
          <br />
          <br />
          <Grid
            container
            justify="center"
            alignContent="center"
            spacing={40}
          >
            <Grid item>
              <ul
                style={{
                  listStyle: 'none',
                  textAlign: 'left',
                }}
              >
                <StyledListItem>
                  <LearnMore
                    text="National Taiwan University (NTU)"
                    center={false}
					 href="https://www.ntu.edu.tw/english/index.html" 
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="International Chinese Language Program (ICLP)"
                    center={false}
					 href = "https://iclp.ntu.edu.tw/"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NTU Campus Map"
                    center={false}
					href ="https://www.ntu.edu.tw/english/about/map.html"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="National Taiwan University Library"
                    center={false}
					 href="http://www.lib.ntu.edu.tw/en"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
              </ul>
            </Grid>
            <Grid item>
              <ul
                style={{
                  listStyle: 'none',
                  textAlign: 'left',
                }}
              >
                <StyledListItem>
                  <LearnMore
                    text="NTU Computer Center"
                    center={false}
					href = "http://www.cc.ntu.edu.tw/english/"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NTU Sport Center"
                    center={false}
					
					href= "https://ntusportscenter.ntu.edu.tw/#/"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="NTU Student Clubs list"
                    center={false}
					href = "http://activity.osa.ntu.edu.tw/English/Club"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="MyNTU (student self-service system)"
                    center={false}
					href="https://my.ntu.edu.tw/myntu/Default.aspx?lang=eng"
                    style={{
                      fontSize: '14px',
                    }}
                  />
                </StyledListItem>
              </ul>
            </Grid>
          </Grid>
        </StyledUserLinksContainer>
      </div>
    );
  }
}
