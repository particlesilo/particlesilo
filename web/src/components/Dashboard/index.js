import React from 'react'
import { styleClass } from '../../utils/style_class'
import { TopicsAggregator } from "./TopicsAggregator"
import { UserProfile } from "./UserProfile"
import { SocialMedia } from "./SocialMedia"
import { Visuals } from "./Visuals"
import { Contributions } from './Contributions'
import { Downloads } from './Contributions'

const contributions = [
    {
        imgUrl:"https://www.extremetech.com/wp-content/uploads/2013/12/Electrons-640x353.jpg",
        author: "Riya Patel",
        title: "Particle Physics",
        date: "3 May 2021",
        length: "2"
    },
    {
        imgUrl:"https://particle.univie.ac.at/fileadmin/_processed_/csm_Teilchen_02_6973acb91c.jpg",
        author: "Riya Patel",
        title: "Particle Physics",
        date: "3 May 2021",
        length: "2"
    }
]

export default function Dashboard({topicsAgg, profile, socialmedia, visuals}){
  return (
    // <div style={{height:"300px"}}>
    //    <UserProfile topics={{}} />
    //    <TopicsAggregator topics={{}} />
    // </div>

    <div className="w-10/12 mx-auto flex flex-row">
      <div className="w-3/12 rounded-lg bg-darkPurple h-3/6">
        <UserProfile profile={{}} />
        <TopicsAggregator topicsAgg={{}} />
        <SocialMedia socialmedia={{}} />
      </div>
      <div className="w-9/12 m-8">
        <Contributions contributions={contributions} title='Contributions'/>
        <Downloads contributions={contributions} title='Downloads'/>
      </div>
        {/* <Visuals visuals={{}} /> */}
    </div>
  )
};
