import React, { useEffect } from "react";
import ProfilesContainer from "../ProfilesContainer/ProfilesContainer";
import "./SecondTeam.scss";
import useTimeOnPageTracker from "../../customHooks/useTimeOnPageTracker";
function SecondTeam() {
  // useEffect(()=>{
  //   console.log('function is executed in 2nd team')

  //   return ()=>{
  //     console.log('First team is unmounted 2nd from dom')
  //   }
  // },[])
  
  useTimeOnPageTracker('SecondTeam-Page')

  return (
    <section className='main-section'>
      <div className='inner-container'>
        <div className='details'>
          <div className='container-details'>
            <h3 className='main-heading'>Our team</h3>
            <div className="mt-16">
              <p className='description'>
                Team is a group of people who are interdependent with respect to
                information, resources, and skills and who seek to combine their
                efforts to achieve a common goal.
              </p>
              <p className='description'>
                Team has members with complementary skills and generate synergy
                through a coordinated effort which allows each member to
                maximize their strengths and minimize their weaknesses.
              </p>
            </div>
          </div>
        </div>
        <div>
          <ProfilesContainer classDesign='second-team' />
        </div>
      </div>
    </section>
  );
}

export default SecondTeam;
