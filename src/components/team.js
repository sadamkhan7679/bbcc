import React from 'react';
import '../App.css';
import './team.css';
import 'aos/dist/aos.css';
import team from '../img/team.webp';
import teamMob from '../img/teamMob.webp';
  




function TeamBudget() {
  return (
            <>
                <div id='team' className='team'>
                <h1 className='teamHeadMob'>TEAM BUDGET</h1>
                    <div className='teamImgBox'>
                        <img className='teamImg' src={team} alt="team" />
                        <img className='teamImgMob' src={teamMob} alt="teamMob" />
                    </div>
                    <h1 className='teamHead'>TEAM<br />BUDGET</h1>
                  
                </div>
            </>

  );
}

export default TeamBudget;
