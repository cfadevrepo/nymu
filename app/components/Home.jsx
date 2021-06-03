import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ArrowRight from '@material-ui/icons/ArrowRight';
import AssetStore from '../../lib/AssetStore';
import Hero from './HomeHero';
import Footer from './Footer';
import LazyBackgroundDimensions from './LazyBackgroundDimensions';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Hero
          src={AssetStore.get('assets/images/home-hero.png')}
        />

        <div className="home-section-info">
          <div className="home-section-info-wrapper">
            <div className="section-container">
           
              <Grid
                container
                alignItems="flex-start"
                className="home-join-us-container"
              >
                 <img
                  src={AssetStore.get('assets/images/nymu-entrance-compressed.png')}
                  className="home-campus-logo" />
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  className="home-campus-text"
                >
                  <div className="home-join-us-title">
                 Join us in Taipei and change your life!
                  </div>
                  <p>
                  Chinese Flagship Overseas Capstone Program in Taiwan believes that a change of location can change perspective, and change your life.
                    The Taiwan Capstone Year provides immersive
                    training in Chinese language and culture.
                  </p>
                  <p>
                    As a part of this program, students will attend classes alongside Chinese peers at National Yang Ming Chiao Tung University,
                    and develop professional expertise in their field of study. This opportunity provides a chance to make lasting
                    friendships and gain the skills necessary to become a global
                    professional!
                  </p>
					
					
                </Grid>
              </Grid>
				
				<Grid
                  container
                  className="home-eligible-container"
                  justify="center"
                >
				<div className="home-join-us-title">Please watch this video for details about the Capstone Year in Taiwan.</div>
					
				<iframe src="https://drive.google.com/file/d/1E84oTbEGzaM5rcge4PVL-NfF1P_jNd3s/preview" width="640" height="480"></iframe>
					
				</Grid>	
				
            </div>
          </div>
        </div>
			
			
			
			
        <div className="home-section-info section-why-list">
          <div className="home-section-info-wrapper">
            <div className="section-container">
              <div className="home-section-slogan" style={{ textAlign: 'center',}}>
                Why join the Taiwan Capstone Year Program?
              </div>

              <Grid container spacing={40} alignItems="center">
                <Grid item xs={6} className="home-section-why-join-container">
                  <div className="home-section-why-join-avatar">
                    <img
                      alt="Ranked best in country"
                      src={AssetStore.get('assets/images/ranked-best-in-country-avatar.png')}
                    />
                  </div>
                  <p className="home-section-why-join-title">
                    Ranked Best Country for Expats
                  </p>
                  <div className="home-section-why-join-description">
                    In 2018, the online InterNations Expat Insider survey of
                    "Best Countries for Expats" gave Taipei a first place ranking for the general
                    friendliness of the Taiwanese people and their positive attitude toward foreign
                    residents. An overwhelming 94 percent gave a high rating for the general friendliness of the
                    locals in Taipei.
                  </div>
                </Grid>
                <Grid item xs={6} className="home-section-why-join-container">
                  <div className="home-section-why-join-avatar">
                    <img
                      alt="Ranked best in country"
                      src={AssetStore.get('assets/images/top-world-happiness-avatar.png')}
                    />
                  </div>
                  <p className="home-section-why-join-title">
                    A Leader in World Happiness in Asia
                  </p>
                  <div className="home-section-why-join-description">
                    In the annual UN-initiated World Happiness Report for 2018, Taiwan ranked
                    first in Asia in happiness, ahead of Singapore (34), Japan (54),
                    South Korea (57), Hong Kong (76), and China (86), and ranked 26th in the world
                    overall among 156 countries and territories.
                  </div>
                </Grid>
                <Grid item xs={6} className="home-section-why-join-container">
                  <div className="home-section-why-join-avatar">
                    <img
                      alt="Ranked best in country"
                      src={AssetStore.get('assets/images/technologically-advanced-avatar.png')}
                    />
                  </div>
                  <p className="home-section-why-join-title">
                    Technologically Advanced
                  </p>
                  <div className="home-section-why-join-description">
                    Taipei was ranked first in Asia and fifth among the world's most
                    technologically advanced cities. Taipei, the only Asian city in the
                    top five, led other cities in industrial design, hardware, the number of
                    headquarters of some of the largest PC companies, and the number of
                    venture capitalists.
                  </div>
                </Grid>
                <Grid item xs={6} className="home-section-why-join-container">
                  <div className="home-section-why-join-avatar">
                    <img
                      alt="Ranked best in country"
                      src={AssetStore.get('assets/images/vibrant-democracy-avatar.png')}
                    />
                  </div>
                  <p className="home-section-why-join-title">
                    A Vibrant Democracy
                  </p>
                  <div className="home-section-why-join-description">
                    Taiwan is also a vibrant democracy, where freedom, rule of law, and
                    human rights are all fostered and protected. In Freedom House’s 2018
                    Survey of Global Freedom, Taiwan was tied for 8th Place in freedom
                    out of 210 countries in the world.
                  </div>
                </Grid>
              </Grid>

              <div className="home-section-why-join-disclaimer">
                <p> <center>
                  Facts and statistics drawn from "Learning to Appreciate a Modern Miracle - Taiwan,"
                   Taiwan News, February 19, 2019
					</center>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section-info">
          <div className="home-section-info-wrapper">
            <div className="section-container">
              <Grid
                container
                className="home-eligible-container"
                justify="center"
              >
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="home-eligible-text"
                >
                  <div className="home-eligible-wrapper">
                    <div className="home-join-us-title">
                      Who’s eligible to apply?
                    </div>
                    <p>					
					  Students attending the Capstone Year must be enrolled in one of the U.S. Chinese Flagship Programs.	
						
                      Other qualification criteria include: academic performance, linguistic
                      skills, course requirements, as well as a personal statement that includes
                      a study plan for the Capstone year. Please consult the Chinese Flagship
                      program at your host institution for details.
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                  className="home-eligible-img-container"
                >
                   <LazyBackgroundDimensions src={AssetStore.get('assets/images/nymu2.png')} placeholder={AssetStore.get('assets/images/nymu2-compressed.jpg')} width="709" height="600"/>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="home-section-info logos">
          <div className="home-section-info-wrapper">
            <div className="section-container">
              <p className="home-about-us-title">
                About Us
              </p>
              <p className="home-about-us-subtext text-center">
               The Chinese Flagship Overseas Capstone Program in Taiwan is funded by
                <br />
                The National Security Education Program and administered by the Hunter College Chinese Flagship Program.
              </p>
              <Grid
                container
                justify="center"
                spacing={40}
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
		<a href="https://thelanguageflagship.org/" target="_blank">
                  <img
                    alt="The Language Flagship"
                    src={AssetStore.get('assets/images/LOGO_Flagship.png')}
                    height="81"
                  /> </a>
                  <p className="home-about-us-subtext">
                    The Language Flagship
                  </p>
                  <p>
                    The Language Flagship leads the nation in designing, supporting, and implementing a new paradigm for advance language education. Through an innovative partnership between the federal government and higher education, The Language Flagship seeks to graduate students who will take their place among the next generation of global professionals, commanding a superior level of proficiency in one of many languages critical to U.S. competitiveness and security.
                  </p>
                  <div className="home-join-us-learn-more">
                    <Grid container alignItems="center">
                      <Grid item>
                        <a
                          href="https://www.thelanguageflagship.org/"
                          target="_blank"
                          style={{
                            color: 'black',
                            textDecoration: 'none',
                          }}
                        >
                          LEARN MORE ABOUT THE LANGUAGE FLAGSHIP
                        </a>
                      </Grid>
                      <Grid item>
                        <ArrowRight />
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
		<a href= "https://hunter.cuny.edu/"  target="_blank" >
                  <img
                    alt="Hunter College"
                    src={AssetStore.get('assets/images/LOGO_Hunter.png')}
                  /> </a>
                  <p className="home-about-us-subtext">
                    Hunter College
                  </p>
                  <p>
                    One of twelve Chinese Flagships in the U.S., Hunter College Chinese Flagship
                    is a rigorous honors program designed for outstanding undergraduates who seek
                    to attain superior proficiency in Mandarin, while pursuing an academic major
                    of their choice.
                  </p>
                  <div className="home-join-us-learn-more">
                    <Grid container alignItems="center">
                      <Grid item>
                        <a
                          href="https://hunter.cuny.edu/"
                          target="_blank"
                          style={{
                            color: 'black',
                            textDecoration: 'none',
                          }}
                        >
                          LEARN MORE ABOUT HUNTER COLLEGE
                        </a>
                      </Grid>
                      <Grid item>
                        <ArrowRight />
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
