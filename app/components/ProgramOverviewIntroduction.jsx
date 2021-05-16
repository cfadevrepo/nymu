import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';

export default class ProgramOverviewIntroduction extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="home-section-info">
          <div className="home-section-info-wrapper">
            <div className="section-container">
              <Grid
                container
                alignItems="flex-start"
                className="home-join-us-container"
              >
                <img
                  alt="campus"
                  src={AssetStore.get('assets/images/program-overview-intro-1.png')}
                  className="home-campus-logo"
                />
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  className="home-campus-text"
                >
                  <div className="home-join-us-title">
                    The Growing Importance of Mandarin Chinese
                  </div>
                  <p>
                    Combining intensive language instruction and cultural immersion, The Language Flagship is a leader
                    in educating U.S. undergraduate students in languages critical to U.S. National Security.
                    Capstone students are outstanding American undergraduates, from 12 universities across the U.S.,
                    who excel in in Mandarin, and who are often double majoring in Chinese and another academic domain.
                  </p>
                  <p>
                    Having completed the rigorous domestic training with a variety of courses, programs, and
                    extracurricular activities to ensure students gain exceptional proficiency in Mandarin Chinese, the
                    Capstone Year is the final component in attaining superior professional fluency in Chinese.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="home-section-info program-overview-2">
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
                  <div
                    className="home-eligible-wrapper"
                    style={{
                      marginTop: '200px',
                    }}
                  >
                    <div className="home-join-us-title">
                      Located in Taipei, Taiwan
                    </div>
                    <p>
                          This year-long Capstone Program in Taipei, Taiwan at National Yang Ming Chiao Tung University offers unparalleled and unique opportunities for Capstone students to immerse themselves in academic and professional environments. The Capstone Year in Taipei helps students become impressive global professionals. The Chinese Flagship Overseas Capstone Program in Taiwan was established in 2019. In addition, there is a Chinese Overseas Flagship in Nanjing, China.	
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={6}
                >
                  <img
                    alt="activity"
                    src={AssetStore.get('assets/images/program-overview-intro-bg-2.png')}
                    style={{
                      width: '100%',
                      maxWidth: '801px',
                      maxHeight: '693px',
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
