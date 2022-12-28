import React, {useState } from 'react';
import '../App.css';
import './pitCrew.css';
import 'aos/dist/aos.css';
import Grid from '@material-ui/core/Grid';
import PitCrewIcon from '../img/pitcrewIcon.webp';
import PitBox from '../img/boxpitcrew.webp';
import Arrow from '../img/arrow.webp';
import svg2 from '../img/svg2.webp';


  




function PitCrew() {
  const [Detail, setDetail] = useState("FM carries 15 years of CXO level work experience before launching his own successful start up revolving around supercars in 2018. A supercar owner himself, he has worked with Formula 1 in his previous stints and has made a global network of supercar owners over the last years, FMs wild vision is to give supercars greater utility, connect the network into a global platform and create alternative ownership models for supercars using blockchain technology.");
  return (
            <>
                <div id='pitcrew' className='pitcrew'>
                  <h1 className='pitCrewHead'>PIT CREW</h1>
                  <Grid container spacing={0} className='pitCrewContainer1'>
                    <Grid item xs={4} md={4} sm={4}>
                      <Grid  container spacing={0} className='PitcrewGrid1' onMouseOver={() => setDetail("FM carries 15 years of CXO level work experience before launching his own successful start up revolving around supercars in 2018. A supercar owner himself, he has worked with Formula 1 in his previous stints and has made a global network of supercar owners over the last years, FMs wild vision is to give supercars greater utility, connect the network into a global platform and create alternative ownership models for supercars using blockchain technology.")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon-1" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>FM</h1>
                          <h1 className='t-2'>Team Principal</h1>
                          <h1 className='t-3'>A tough cookie.</h1>
                        </Grid>
                      </Grid>    
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                       <Grid container spacing={0} className='PitcrewGrid2' onMouseOver={() => setDetail("We think he’s on something - we don’t question it. We just look at the output this creature brings and stay in aww. He has the ability to get into Team Principal’s mind and create an exact replica of what he was imaging and put that into design. This makes him a superfast designer and a psychic mind reader.")}>
                          <Grid item xs={6} md={6} sm={6}>
                            <div className='IconPitCrewBox'>
                              <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon-2" />
                            </div>
                          </Grid>
                          <Grid item xs={6} md={6} sm={6}>
                            <h1 className='t-1'>TheArdentGuy</h1>
                            <h1 className='t-2'>Studio, Animation & Design</h1>
                            <h1 className='t-3'>Free mind-reading sessions available<br />- he accepts crypto donations</h1>
                          </Grid>
                        </Grid>  
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                      <Grid container spacing={0} className='PitcrewGrid3' onMouseOver={() => setDetail("With one ready command awaiting liftoff, SpaceX*Y=K is our best hedge to D2E. Always ready to launch rockets to Neptune, the lethal combination of rational thinking and creative thinking make the perfect balance in our Blockchain development progress.")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon-3" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>SpaceX*Y=K</h1>
                          <h1 className='t-2'>Space-rocket<br />Blockchain Dev</h1>
                          <h1 className='t-3'>Elon aint got nothin’ on this..</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                  </Grid>   
                  <Grid container spacing={0} className='pitCrewContainer2'>
                    <Grid item xs={4} md={4} sm={4}>
                     <Grid container spacing={0} className='PitcrewGrid1' onMouseOver={() => setDetail(" A passionate & driven artist himself. BRP studied Automotive Design from a reputed design college and spearheaded multiple design delivery projects across a variety of clients. He carries the ability to execute an entire design project for NFTs and has delivered the first collection for BBCC in record time. ")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon-4" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>BRP</h1>
                          <h1 className='t-2'>Art & Race Director</h1>
                          <h1 className='t-3'>The real Speedy Gonzales.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                    <Grid container spacing={0} className='PitcrewGrid2' onMouseOver={() => setDetail("Always upto no good, Rocketman seems to only work once the world goes to sleep. An artist with code, he can draft up the most complicated websites overnight. His task is to keep the digital assets running, hosted and coded in all the right ways.")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon-5" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>Rocketman</h1>
                          <h1 className='t-2'>Frontend Collision & UI</h1>
                          <h1 className='t-3'>You know who to catch if the<br />site crashed on mint day.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                     <Grid container spacing={0} className='PitcrewGrid3' onMouseOver={() => setDetail("Giving away a Murcielago in this day and age is not easy. Shes a classic and hence needs utmost attention and care so shes delivered to her new rightful owner safely and in style - This is where Shant comes in. From sourcing negotiation, logistics, duty, insurance you name it the man has filled a form about it somewhere.")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon-6" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>Shant</h1>
                          <h1 className='t-2'>Supercar Specialist</h1>
                          <h1 className='t-3'>The hottest number in town<br />on 07 June 2022.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                  </Grid>   
                  <Grid container spacing={0} className='pitCrewContainer3' >
                    <Grid item xs={4} md={4} sm={4}>
                     <Grid container spacing={0} className='PitcrewGrid1' onMouseOver={() => setDetail("Sitting at the media center with the responsibility of overwatch at his helm, EP tracks all teams and their development on a daily basis. A real taskmaster at heart, he has the power to keep Team Principal back at office when the clock is running out.")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>Energetic Panda</h1>
                          <h1 className='t-2'>Commentator / Overwatch</h1>
                          <h1 className='t-3'>Sleeping is his side-hustle.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                     <Grid container spacing={0} className='PitcrewGrid2' onMouseOver={() => setDetail("Research oriented, patient, calm and composed are a few words you may associate with D2E. He’s the anchor to creativity and draws the line when our ideas start getting big green candles. His research and planning ability keeps us setting targets that are achievable - and so we achieve them. ")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>D2E</h1>
                          <h1 className='t-2'>Down-to-Earth (D2E)<br />Blockchain Dev</h1>
                          <h1 className='t-3'>When Monks become coders.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                     <Grid container spacing={0} className='PitcrewGrid3' onMouseOver={() => setDetail("MNM is not a rapper, If anything he’s the opposite of that. Our on-ground resource is literally the one that keeps the mics & the lights on. A real resourceful guy that has a lot of connects, he wrinkles out the issues of operations, deliveries of rewards, couriers, transporters, fiat bank stuff etc and keeps things stay on track.")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>Mr.MNM</h1>
                          <h1 className='t-2'>Operations & On-ground</h1>
                          <h1 className='t-3'>A Rubber to the Road<br />kinda guy.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                  </Grid> 
                  <Grid container spacing={0} className='pitCrewContainer4'>
                    <Grid item xs={4} md={4} sm={4}>
                      <Grid container spacing={0} className='PitcrewGrid1' onMouseOver={() => setDetail(" A perfectionist at heart, AJ has the ability to crowd control a music festival if she was allowed to. Keeping a keen eye on the community, managing expectations and creating engagement is her primary task and she monitors sentiment and expectations within the community across all platforms. ")}>
                        <Grid item xs={6} md={6} sm={6}>
                          <div className='IconPitCrewBox'>
                            <img className='IconPitCrewImg' src={PitCrewIcon}  alt="pit-crew-icon"/>
                          </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>AJ</h1>
                          <h1 className='t-2'>Community</h1>
                          <h1 className='t-3'>Sometimes, we think she’s<br />become a Frequently Asked<br />Question.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                     
                    </Grid>
                    <Grid item xs={4} md={4} sm={4}>
                      <Grid container spacing={0} className='PitcrewGrid3' onMouseOver={() => setDetail("Oftentimes projects lose track of their initial ideas and intents. To stay committed to our intentions and our charity initiatives, Essa stands as the dedicated desk to track the progress of the 10% funds we give away and to ensure proper utilization. Essa further drives the initiatives that DAO members decide on - creating an on-going charity fund that are accumulated with the royalties collected from trades.")}>
                        <Grid item xs={6} md={6} sm={6}>
                            <div className='IconPitCrewBox'>
                              <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon"/>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={6} sm={6}>
                          <h1 className='t-1'>Essa</h1>
                          <h1 className='t-2'>Charity Initiatives</h1>
                          <h1 className='t-3'>What you give is what you<br />get is what you give more.</h1>
                        </Grid>
                      </Grid>  
                    </Grid>
                  </Grid>  
                  <div className='MobCrew'>
                    <div className='cards-crew-scroll'>
                      <div className="crew-wrapper">
                        <div className="crew crew1">
                          <div className='arrow1'>
                            <img className='arrow1img' src={Arrow} alt="pit-crew-icon" />
                          </div>
                          <Grid container spacing={0} className='pitCrewContainer1mob'>
                            <Grid item xs={12} md={12} sm={12}>
                              <Grid  container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("FM carries 15 years of CXO level work experience before launching his own successful start up revolving around supercars in 2018. A supercar owner himself, he has worked with Formula 1 in his previous stints and has made a global network of supercar owners over the last years, FMs wild vision is to give supercars greater utility, connect the network into a global platform and create alternative ownership models for supercars using blockchain technology.")}>
                                <Grid item xs={6} md={6} sm={6}>
                                  <div className='IconPitCrewBox'>
                                    <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                  </div>
                                </Grid>
                                <Grid item xs={6} md={6} sm={6}>
                                  <h1 className='t-1'>FM</h1>
                                  <h1 className='t-2'>Team Principal</h1>
                                  <h1 className='t-3'>A tough cookie.</h1>
                                </Grid>
                              </Grid>    
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                              <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail(" A passionate & driven artist himself. BRP studied Automotive Design from a reputed design college and spearheaded multiple design delivery projects across a variety of clients. He carries the ability to execute an entire design project for NFTs and has delivered the first collection for BBCC in record time. ")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>BRP</h1>
                                    <h1 className='t-2'>Art & Race Director</h1>
                                    <h1 className='t-3'>The real Speedy Gonzales.</h1>
                                  </Grid>
                                </Grid>  
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                               <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("Sitting at the media center with the responsibility of overwatch at his helm, EP tracks all teams and their development on a daily basis. A real taskmaster at heart, he has the power to keep Team Principal back at office when the clock is running out.")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>Energetic Panda</h1>
                                    <h1 className='t-2'>Commentator / Overwatch</h1>
                                    <h1 className='t-3'>Sleeping is his side-hustle.</h1>
                                  </Grid>
                                </Grid>  
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail(" A perfectionist at heart, AJ has the ability to crowd control a music festival if she was allowed to. Keeping a keen eye on the community, managing expectations and creating engagement is her primary task and she monitors sentiment and expectations within the community across all platforms. ")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>AJ</h1>
                                    <h1 className='t-2'>Community</h1>
                                    <h1 className='t-3'>Sometimes, we think she’s<br />become a Frequently Asked<br />Question.</h1>
                                  </Grid>
                                </Grid>  
                            </Grid>
                          </Grid>
                        
                        </div>
                        <div className="crew crew2">
                          <div className='arrow2'>
                            <img className='arrow1img' src={Arrow} alt="pit-crew-icon"/>
                          </div>
                          <Grid container spacing={0} className='pitCrewContainer1mob'>
                            <Grid item xs={12} md={12} sm={12}>
                              <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("We think he’s on something - we don’t question it. We just look at the output this creature brings and stay in aww. He has the ability to get into Team Principal’s mind and create an exact replica of what he was imaging and put that into design. This makes him a superfast designer and a psychic mind reader.")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>TheArdentGuy</h1>
                                    <h1 className='t-2'>Studio, Animation & Design</h1>
                                    <h1 className='t-3'>Free mind-reading sessions available<br />- he accepts crypto donations</h1>
                                  </Grid>
                                </Grid>  
                              </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                              <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("Always upto no good, Rocketman seems to only work once the world goes to sleep. An artist with code, he can draft up the most complicated websites overnight. His task is to keep the digital assets running, hosted and coded in all the right ways.")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>Rocketman</h1>
                                    <h1 className='t-2'>Frontend Collision & UI</h1>
                                    <h1 className='t-3'>You know who to catch if the<br />site crashed on mint day.</h1>
                                  </Grid>
                                </Grid>  
                              </Grid>
                             
                             
                              <Grid item xs={12} md={12} sm={12}>
                               <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("Research oriented, patient, calm and composed are a few words you may associate with D2E. He’s the anchor to creativity and draws the line when our ideas start getting big green candles. His research and planning ability keeps us setting targets that are achievable - and so we achieve them. ")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>D2E</h1>
                                    <h1 className='t-2'>Down-to-Earth (D2E)<br />Blockchain Dev</h1>
                                    <h1 className='t-3'>When Monks become coders.</h1>
                                  </Grid>
                                </Grid>  
                              </Grid>
                              <Grid item xs={12} md={12} sm={12}>
                                  <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("With one ready command awaiting liftoff, SpaceX*Y=K is our best hedge to D2E. Always ready to launch rockets to Neptune, the lethal combination of rational thinking and creative thinking make the perfect balance in our Blockchain development progress.")}>
                                    <Grid item xs={6} md={6} sm={6}>
                                      <div className='IconPitCrewBox'>
                                        <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                      </div>
                                    </Grid>
                                    <Grid item xs={6} md={6} sm={6}>
                                      <h1 className='t-1'>SpaceX*Y=K</h1>
                                      <h1 className='t-2'>Space-rocket<br />Blockchain Dev</h1>
                                      <h1 className='t-3'>Elon aint got nothin’ on this..</h1>
                                    </Grid>
                                  </Grid>  
                                </Grid>
                          </Grid>
                        </div>
                        <div className="crew crew3">
                          <Grid container spacing={0} className='pitCrewContainer1mob'>
                            <Grid item xs={12} md={12} sm={12}>
                                <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("Giving away a Murcielago in this day and age is not easy. Shes a classic and hence needs utmost attention and care so shes delivered to her new rightful owner safely and in style - This is where Shant comes in. From sourcing negotiation, logistics, duty, insurance you name it the man has filled a form about it somewhere.")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon"  />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>Shant</h1>
                                    <h1 className='t-2'>Supercar Specialist</h1>
                                    <h1 className='t-3'>The hottest number in town<br />on 07 June 2022.</h1>
                                  </Grid>
                                </Grid>  
                              </Grid>

                            <Grid item xs={12} md={12} sm={12}>
                              <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("MNM is not a rapper, If anything he’s the opposite of that. Our on-ground resource is literally the one that keeps the mics & the lights on. A real resourceful guy that has a lot of connects, he wrinkles out the issues of operations, deliveries of rewards, couriers, transporters, fiat bank stuff etc and keeps things stay on track.")}>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                  </Grid>
                                  <Grid item xs={6} md={6} sm={6}>
                                    <h1 className='t-1'>Mr.MNM</h1>
                                    <h1 className='t-2'>Operations & On-ground</h1>
                                    <h1 className='t-3'>A Rubber to the Road<br />kinda guy.</h1>
                                  </Grid>
                              </Grid>  
                            </Grid>
                           
                            <Grid item xs={12} md={12} sm={12}>
                              <Grid container spacing={0} className='PitcrewGrid' onMouseOver={() => setDetail("Oftentimes projects lose track of their initial ideas and intents. To stay committed to our intentions and our charity initiatives, Essa stands as the dedicated desk to track the progress of the 10% funds we give away and to ensure proper utilization. Essa further drives the initiatives that DAO members decide on - creating an on-going charity fund that are accumulated with the royalties collected from trades.")}>
                                <Grid item xs={6} md={6} sm={6}>
                                    <div className='IconPitCrewBox'>
                                      <img className='IconPitCrewImg' src={PitCrewIcon} alt="pit-crew-icon" />
                                    </div>
                                </Grid>
                                <Grid item xs={6} md={6} sm={6}>
                                  <h1 className='t-1'>Essa</h1>
                                  <h1 className='t-2'>Charity Initiatives</h1>
                                  <h1 className='t-3'>What you give is what you<br />get is what you give more.</h1>
                                </Grid>
                              </Grid>  
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>   
                  </div>
                  <div className='teamCrewContent'>
                        <div className='crewDetails'>
                          <h1 className='detailsCrew'>{Detail}</h1>
                        </div>
                        <div className='PitBox'>
                          <img className='pitboxImg' src={PitBox} alt="pit-box-icon-1" />
                          <img className='pitboxImg2' src={svg2}  alt="pit-box-icon-2" />
                        </div>
                      </div>    
                </div>
            </>

  );
}

export default PitCrew;


































