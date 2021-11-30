import { Grid } from '@mui/material';
import Typical from 'react-typical'
import React from 'react';
import './Home.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useHistory } from 'react-router';
import { height } from '@mui/system';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Project from '../Projects/Project';
import Celebrate from '../Celebration/Celebrate';



const Home = () => {

    const history = useHistory();






    return (
        <div>

            <div className="home-box" >


                <div className="home-container">

                    <div className="home-navigation-box" id='home'>

                        <div 
                        style={{
                            backgroundColor:'#0B0952'
                        }}
                        className="home-navigation-container">

                    <Grid container spacing={9}>
                      <Grid item xs={12} md={6} lg={6}>
                     
                       <Grid style={{
                           color:'white',
                           fontSize:'30px'
                       }} item xs={12} md={12} lg={12}>
                       <Typical
                      style={{
                          color:'white'
                      }}
                          steps={['Hey!', 1000,'I am a Full Stack Developer', 500]}
                          loop={Infinity}
                          wrapper="h2"
                        />
                   
                      </Grid>


                      <Grid  item xs={12} md={12} lg={12}>
                      <h2 
                      style={{
                        color:'white',
                        fontSize:'40px'
                    }}
                      > Here I’m <span className='first-name'>Mahadi</span> Hasan</h2>

                       <p 
                         style={{
                            color:'white',
                            fontSize:'17px'
                        }}className='my-home-desc'>Obviously I'm a Full Stack Web Developer with 1 year of experience. Experienced with all stages of the development</p>
                                          
                      </Grid>


                      <Grid item sx={12} md={12} lg={12}>

                      <div className='icons'>


                      <div className="git-icon"
                    >
                         <a href="https://github.com/Developer20202021/">
                            
                          
                            <i  style={{
                                color:'white',
                                fontSize:'47px'
                                
                            }} class="fab fa-github"></i>
                         </a>
                              
                          </div>
                          <div className="linked-icon"
                
                          >
                              <a href="https://linkedin.com/in/mahadi-onlyme">
                              <i  style={{
                                color:'rgb(65, 118, 250)',
                                fontSize:'47px'
                                
                            }} class="fab fa-linkedin-in"></i>
                              </a>
                        
                          </div>






                      </div>




                      </Grid>

                   
                         </Grid>



                     
                     <Grid item xs={12} md={6} lg={6}>



                     <Grid  item xs={12} md={12} lg={12}>

                       <div className='my-image'>

                       <img className='my-photo'
                        
                           src="https://i.ibb.co/2cTTsvg/mahadi.png" alt="" />
                       </div>
                       


                      </Grid>


                      </Grid>

                    </Grid>



                        </div>
                        
                        <div className="about-home"  style={{
            backgroundColor:'#070640'
        }} id='about'>

                    <AboutMe></AboutMe>


                </div>

             



                <div className="project-home" style={{
            backgroundColor:'#070640'
        }} id='projects'>
                
                <h2 className='works' style={{
                        color:'white',
                        fontSize:'70px'
                    }}>My Works</h2>

                    <Project></Project>

                    





                </div>

                <div>
                    <Celebrate></Celebrate>
                </div>

            





                

                <div className="contact-form" style={{
            backgroundColor:'#070640'
        }} id='contact'>
                
                <h2 className='lets' style={{
                        color:'white',
                        fontSize:'70px'
                    }}>Let's Talk</h2>

                    <Contact></Contact>





                </div>



                    </div>

                    





                </div>




                           {/* about  */}


             










            </div>

            
        </div>
    );
};

export default Home;