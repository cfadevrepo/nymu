import React from 'react';
import {
  Link,
} from 'react-router-dom';

import LazyBackgroundHome from './LazyBackgroundHome'

class HomeHero extends React.Component {
  render() {
    const {
      src,
    } = this.props;

    return (
	<LazyBackgroundHome placeholder='/overseasintaipeifall2020/assets/images/home-hero-temp.png' src='/overseasintaipeifall2020/assets/images/home-hero.png' >
	
        <div
          style={{
            textAlign: 'right',
            color: '#ffffff',
            position: 'absolute',
            top: '50%',
            right: '25px',
            transform: 'translateY(-50%)',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              textAlign: 'center',
              letterSpacing: '0.1em',
              marginBottom: '25px',
            }}
          >
            THE CHINESE OVERSEAS FLAGSHIP IN 
          </div>
          <div
            style={{
              fontSize: '70px',
              textAlign: 'center',
              marginBottom: '50px',
            }}
          >
            TAIWAN
          </div>
          <p
            style={{
              textAlign: 'center',
            }}
          >
            <Link
              to="/program-overview/introduction"
              style={{
                fontSize: '14px',
                letterSpacing: '0.2em',
                backgroundColor: '#000000',
                padding: '20px',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '4px',
              }}
            >
              LEARN MORE
            </Link>
          </p>
        </div>
		</LazyBackgroundHome>

		
    );
  }
}

export default HomeHero;
