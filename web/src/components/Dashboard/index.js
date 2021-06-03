import React from 'react'
import { styleClass } from '../../utils/style_class'
// Import each Dashboard Component here
import { TopicsAggregator } from "./TopicsAggregator"
import { UserProfile } from "./UserProfile"
import { SocialMedia } from "./SocialMedia"
import { Visuals } from "./Visuals"


// export const Dashboard = () => {
//     return(
//         <div className={styleClass.container}>
//         </div>
//     )
// }

// This is the main dashboard page
export default function Dashboard({topicsAgg, profile, socialmedia, visuals}){
  return (
    // <div style={{height:"300px"}}>
    //    <UserProfile topics={{}} />
    //    <TopicsAggregator topics={{}} />
    // </div>

    <div className="grid grid-cols-1 md:grid-cols-4">
        <UserProfile profile={{}} />
        <TopicsAggregator topicsAgg={{}} />
        <SocialMedia socialmedia={{}} />
        <Visuals visuals={{}} />
    </div>
  )
};
