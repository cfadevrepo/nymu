import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';

export default class AcademicsEducationalExcursions extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="home-section-info">
          <div className="home-section-info-wrapper">
            <div className="excursions-section-container">
              <Grid
                container
                alignItems="flex-start"
                className="home-join-us-container"
              >
                <img
                  alt="campus"
                  src={AssetStore.get('assets/images/atayal.jpg')}
                  className="excursions-img"

                />
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  className="home-campus-text"
                >
                  <div className="home-join-us-title">
                  Exploring Taiwanese Aboriginal Culture
                  </div>
                  <p>
                  During the first semester, students will visit the aboriginal Atayal Tribe community near Taipei. 
                  Students will work with the community to design a plan to connect the Taiwanese aboriginal culture with the world. Students will use their professional knowledge from their different academic majors to contribute to this project. 
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className="home-section-info program-overview-2">
          <div className="home-section-info-wrapper">
            <div className="excursions-section-container">
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
                    Behold a Unique Ancient Ritual
                    </div>
                    <p>
                    During the second semester, students will visit a town in the south of Taiwan, Beigang, and witness the traditional Dajia Mazu Pilgrimage, a religious and cultural procession with rituals that are unique to the Chinese traditional religion, and which has been preserved only in Taiwan.
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
                    src={AssetStore.get('assets/images/excursion-content.jpg')}
                    style={{ width:'600px', height:'550px',}}
                    className="excursions-img"
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
