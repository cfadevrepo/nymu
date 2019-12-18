import React from 'react';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';
import LearnMore from './LearnMore';
import {
  StyledTitle,
  StyledSealContainer,
  StyledSealLabel,
  StyledSealImage,
} from './program.styles';

const SEALS = [
  {
    label: 'Arizona State University',
    src: 'assets/images/arizona-state.png',
  },
  {
    label: 'Brigham Young University',
    src: 'assets/images/brigham-young-university.png',
  },
  {
    label: 'Hunter College, City University of NY',
    src: 'assets/images/hunter-college.png',
  },
  {
    label: 'Indiana University',
    src: 'assets/images/indiana-university.png',
  },
  {
    label: 'San Francisco State University',
    src: 'assets/images/san-francisco-state-university.png',
  },
  {
    label: 'University of Hawaii, Manoa',
    src: 'assets/images/university-of-hawaii-manoa.png',
  },
  {
    label: 'University of Minnesota',
    src: 'assets/images/university-of-minnesota.png',
  },
  {
    label: 'University of Mississippi',
    src: 'assets/images/university-of-mississippi.png',
  },
  {
    label: 'University of North Georgia',
    src: 'assets/images/university-of-north-georgia.png',
  },
  {
    label: 'University of Oregon',
    src: 'assets/images/university-of-oregon.png',
  },
  {
    label: 'University of Rhode Island',
    src: 'assets/images/university-of-rhode-island.png',
  },
  {
    label: 'Western Kentucky University',
    src: 'assets/images/western-kentucky-university.png',
  },
];

export default class ProgramOverview12Flagships extends React.PureComponent {
  render() {
    return (
      <div className="home-section-info">
        <div className="home-section-info-wrapper twelve-flagships">
          <div className="section-container">
            <StyledTitle>
              The Twelve Chinese Flagship
            </StyledTitle>
            <br />
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={24}
            >
              {SEALS.map(seal => (
                <Grid
                  key={seal.label}
                  item
                >
                  <StyledSealContainer>
                    <StyledSealImage
                      alt={seal.label}
                      src={AssetStore.get(seal.src)}
                    />
                    <StyledSealLabel>
                      {seal.label}
                    </StyledSealLabel>
                    <LearnMore
                      text="LEARN MORE"
                    />
                  </StyledSealContainer>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
