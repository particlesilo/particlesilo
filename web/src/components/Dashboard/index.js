import React from 'react'
import { styleClass } from '../../utils/style_class'
// Import each Dashboard Component here
import { TopicsAggregator } from "./TopicsAggregator"
import { UserProfile } from "./UserProfile"


// export const Dashboard = () => {
//     return(
//         <div className={styleClass.container}>
//         </div>
//     )
// }

// This is the main dashboard page
export default function Dashboard({topics, profile, socialmedia}){
  return (
    <div style={{height:"300px"}}>
       <UserProfile topics={{}} />
       <TopicsAggregator topics={{}} />
    </div>
  )

};
