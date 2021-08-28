import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hero from './Hero';
import Footer from './Footer';
import LazyBackgroundDimensions from './LazyBackgroundDimensions';
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
  StyledLargeNumberSubtext,
} from './program.styles';
import {
  StyledSectionImage,
} from './core.styles';
import AssetStore from '../../lib/AssetStore';
import LearnMore from './LearnMore';


export default class StudentLife extends React.PureComponent {
  render() {
    const {
      location: {
        pathname,
      },
    } = this.props;

    return (
      <div>
        <Hero
          route={pathname}
        />
        <Grid
          container
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <StyledSkinnyText>
              <StyledSkinnyTitle>
                Student Life in Taipei
              </StyledSkinnyTitle>
              <StyledShortUnderline />
              <StyledSKinnyDescription>
                Taiwan is a diverse state, full of natural beauty and many exciting cities, and is home to people from
                all over China and the world. Capstone Year students who choose the program will find that Taiwan
                is interesting and well worth exploring.
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
            <LazyBackgroundDimensions src={AssetStore.get('assets/images/student-life-2.jpg')} placeholder={AssetStore.get('assets/images/student-life-2-compressed.jpg')} width="709" height="427"/>
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

<LazyBackgroundDimensions src={AssetStore.get('assets/images/student-life-3.jpg')} placeholder={AssetStore.get('assets/images/student-life-3-compressed.jpg')} width="730" height="469"/>

          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <StyledSkinnyText>
              <StyledSkinnyTitle>
                Make Lifelong Friends
              </StyledSkinnyTitle>
              <StyledShortUnderline />
              <StyledSKinnyDescription>
                Perhaps most important for students whose goal is to raise their Chinese language skills to a superior
                level, the Taiwanese people are friendly, open, and happy to speak with foreign students and
                visitors. While in the program, students will have innumerable opportunities to meet and
                socialize with their Chinese peers, as well as with younger and older people, both on and off the NYCU Yangming Campus. Student life at NYCU and in Taipei is rich with chances to learn and have fun!
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
                Experience Taiwanese Culture
              </StyledSkinnyTitle>
              <StyledShortUnderline />
              <StyledSKinnyDescription>
                Students who live in Taipei can closely experience many aspects of Taiwanese culture and lifestyle. From
                shopping the night markets to visiting cultural sites to hiking mountains or spending time at the beach,
                most of these activities can be reached from the NYCU Yangming Campus within an hour or less, which makes it easy for
                Flagship Capstone students to immerse themselves in Taiwanese culture.
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
            <LazyBackgroundDimensions src={AssetStore.get('assets/images/student-life-5.jpg')} placeholder={AssetStore.get('assets/images/student-life-5-compressed.jpg')} width="709" height="427"/>

          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
        >
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              textAlign: 'right',
            }}
          >
                      <LazyBackgroundDimensions src={AssetStore.get('assets/images/student-life-4.jpg')} placeholder={AssetStore.get('assets/images/student-life-4-compressed.jpg')} width="709" height="600"/>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
          >
            <StyledSkinnyText>
              <StyledSkinnyTitle>
                Transportation in Taipei
              </StyledSkinnyTitle>
              <StyledShortUnderline />
              <StyledSKinnyDescription>
                Many cities in the United States have clear divisions between their business districts and residential
                areas, and require owning a car to get around most conveniently. Cities in Taiwan -- especially Taipei
                -- integrate business and residential areas, and have extensive public transportation systems. In fact,
                public transportation is widespread and inexpensive throughout Taiwan, allowing students to travel
                easily and explore the state.
              </StyledSKinnyDescription>
            </StyledSkinnyText>
          </Grid>
        </Grid>
        <StyledProgramGuideContainer>
          <Grid
            container
            justify="center"
            alignContent="center"
            spacing={40}
          >
            <Grid
              item
              md={4}
            >
              <StyledText>
                Students must be mindful of security and remain cautious while
                traveling and living abroad. Students are strongly encouraged to carefully read the Program Handbook and a Student Life Guidebook to understand what to expect as they embark on the final part of their Flagship experience.
              </StyledText>
            </Grid>
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
              <StyledGuideLabel>Program Handbook</StyledGuideLabel>
              <p>
                <StyledLink
                  target = "_blank"
                  href={AssetStore.get('assets/resources/program-handbook.pdf')}
                >
                  DOWNLOAD
                </StyledLink>
              </p>
            </Grid>
            <Grid
              item
              md={2}
              style={{
                textAlign: 'center',
              }}
            >
              <img
                alt="Program Guide"
                src={AssetStore.get('assets/images/program-guide-1.png')}
                style={{
                  margin: 'auto',
                }}
              />
              <StyledGuideLabel>Student Life Guidebook</StyledGuideLabel>
              <p>
                <StyledLink
                  target = "_blank"
                  href={AssetStore.get('assets/resources/student-guidebook.pdf')}
                >
                  DOWNLOAD
                </StyledLink>
              </p>
            </Grid>

          </Grid>
        </StyledProgramGuideContainer>
        <StyledUserLinksContainer>
          <StyledSkinnyTitle2>
            Useful Links
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
				  textAlign: 'left',	
                  listStyle: 'none',
                }}
              >
                <StyledListItem>
                  <LearnMore
                    text="TRAVEL TAIPEI"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="https://www.travel.taipei/en"
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="Taiwan Tourism"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="https://eng.taiwan.net.tw/"
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="TAIPEI WALKING TOUR"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="https://www.taipei-walkingtour.tw/en001"
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="TAIPEI METRO"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="https://english.metro.taipei"
                  />
                </StyledListItem>
              </ul>
            </Grid>
            <Grid item>
              <ul
                style={{
				textAlign: 'left',	
                  listStyle: 'none',
                }}
              >
                <StyledListItem>
                  <LearnMore
                    text="TAIWAN HIGH SPEED RAIL"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="http://www.thsrc.com.tw/index_en.html"
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="TAIWAN RAILWAYS ADMINISTRATION"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="https://www.railway.gov.tw/en/index.aspx"
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="KKday (travel activity packages & discounted tickets)"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="https://www.kkday.com/en/"
                  />
                </StyledListItem>
                <StyledListItem>
                  <LearnMore
                    text="CULTURAL ARTS TICKETS"
                    center={false}
                    style={{
                      fontSize: '14px',
                    }}
                    href="https://www.artsticket.com.tw/CKSCC2005/Home/Home00/index.aspx"
                  />
                </StyledListItem>
              </ul>
            </Grid>
          </Grid>
        </StyledUserLinksContainer>
        <Footer />
      </div>
    );
  }
}
