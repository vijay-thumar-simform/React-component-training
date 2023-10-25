import React, { useEffect } from "react";
import ProfilesContainer from "../ProfilesContainer/ProfilesContainer";
import useTimeOnPageTracker from "../../customHooks/useTimeOnPageTracker";

function TeamIntro() {
  // useEffect(()=>{
  //   console.log('function is executed in First team')
  //   return ()=>{
  //     console.log('First team is unmounted from dom')
  //   };
  // },[]);

  // useTimeOnPageTracker("FirstTeam-Page");

  return (
    <section className='section-team'>
      <div className='container'>
        <div className='container-details'>
          <h3 className='main-heading'>Our team</h3>
          <p className='description'>
            A team is a group of people who are interdependent with respect to
            information, resources, and skills and who seek to combine their
            efforts to achieve a common goal
          </p>
        </div>
        <div className='gallery-holder'>
          <ProfilesContainer classDesign='container-Gallery' />
        </div>
      </div>
      <div>
        <button id='tag-trigger'
          onClick={() => {
            console.log('data layer push clicked')
            window.dataLayer.push({ Message: "Viju", user_name: 'Vijay' });
            console.log('data layer push worked i think')
          }}>click to send data variable gTag</button>
      </div>
    </section>
  );
}

export default TeamIntro;
