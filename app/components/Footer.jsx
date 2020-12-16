import React from 'react';
import {
  Link,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import AssetStore from '../../lib/AssetStore';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="home-section-info footer">
        <div className="home-section-info-wrapper">
          <div className="section-container">
            <Grid container spacing={40}>
              <Grid item>
                <p className="footer-menu-title">MENU</p>
                <div className="footer-menu-links">
                  <p>
                    <a href="/TaipeiCapstone/program-overview/introduction">
                      Program Overview
					  </a>
                  </p>
                  <p>
                    <a  href="/TaipeiCapstonefall2020/academics/introduction">
                      Academics
                    </a>
                  </p>
                  <p>
                    <a  href="/TaipeiCapstone/internship/introduction">
                      Internship
                    </a>
                  </p>
                  <p>
                    <a href="/TaipeiCapstone/student-life">
                      Student Life
                    </a>
                  </p>
                  <p>
                    <a href="https://nymu-e.ym.edu.tw/bin/home.php">
                      National Yang-Ming University
                    </a>
                  </p>
                  <p>
                    <a href="http://overseas.chineseforall.org/contact/form">
                      Contact Us
                    </a>
                  </p>
                </div>
              </Grid>
              <Grid item>
                <p className="footer-menu-title">CONTACT US</p>
                <div className="footer-contact-us">
                  <p>
                    Hunter College
                    <br />
                    chineseflagship@hunter.cuny.edu
                    <br />
                    212-396-6595
                  </p>
                </div>
                <br />
                <p className="footer-menu-title">CONTACT US</p>
                <div className="footer-contact-us">
                  <p>
                    <a target="_blank"  href={"https://www.thelanguageflagship.org/"}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                    The Language Flagship 
		    </a>		    
                    <br />
                    <a target="_blank" href={"https://www.thelanguageflagship.org/chinese"}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                      The Thirteen Chinese Flagship
                    </a>
                  </p>
                </div>
				</Grid>
				<Grid item></Grid>
				<Grid item></Grid>
				<Grid item>
             
              <a href="https://thelanguageflagship.org/"  target="_blank" >
                <img
                  alt="Chinese Flagship"
                  src={AssetStore.get('assets/images/language-flagship-logo.png')}
                  height="60"
                />
				
					</a>
				 <br />
				 <br />
              <a href="http://chineseflagship.hunter.cuny.edu/"  target="_blank" >
                <img
                  alt="Chinese Flagship"
                  src={AssetStore.get('assets/images/HCF.jpg')}
                  height="60"
                />
				
					</a>
				 <br />
				 <br />
              <a href="https://hunter.cuny.edu/"  target="_blank" >
                <img
                  alt="Chinese Flagship"
                  src={AssetStore.get('assets/images/LOGO_Hunter.png')}
                  height="60"
                />
					</a> 
				</Grid>
			  </Grid>
				
				
			
            <hr className="spacer" />
            <p className="footer-copyright">
              © Copyright 2019 The Chinese Flagship Overseas Capstone Program in Taiwan
            </p>
			  
		   <p className="footer-copyright">
              We would like to thank the following people who shared their photos of Taiwan with us: Benedith Bruno, Jay Chieh-Chun Lee, Alejandro Quintero, and Janette Wu.
            </p>	  
			  
          </div>
        </div>
      </div>
    );
  }
}
