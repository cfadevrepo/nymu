import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Grid from '@material-ui/core/Grid';

class TopBar extends React.Component {
  render() {
    return (
      <Grid container className="top-bar">
        <Grid
          item
          style={{
            marginRight: '5px',
          }}
        >
          <a href="http://chineseflagship.hunter.cuny.edu/">
            <ArrowLeftIcon />
          </a>
        </Grid>
        <Grid
          item
          style={{
            marginTop: '5px',
          }}
        >
          <a href="http://chineseflagship.hunter.cuny.edu/">
            BACK TO HUNTER CHINESE FLAGSHIP
          </a>
        </Grid>
      </Grid>
    );
  }
}

export default TopBar;
