import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';
import ReactPlayer from 'react-player'

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
              <div className="home-join-us-title">
                To see what the Taiwan Program first cohort's aboriginal excursion was like, please watch this video of their trip.
              </div>
              <iframe src="https://drive.google.com/file/d/1b1y7GeBJKTEOanpwCWIolJQbS-cdtoYk/preview" width="85%" height="400px"></iframe>
                </Grid>
            
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
