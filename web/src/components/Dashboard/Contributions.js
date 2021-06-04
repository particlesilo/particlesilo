import React from "react"; 
import { TopicCard } from "./TopicCard";


export const Contributions = ({contributions}) => { 
    return ( 
        <div className="rounded-xl bg-darkPurple p-6"> 
            <p className="text-white text-2xl">Contributions</p>
            <div className="flex flex-row">
            {
                 contributions.slice(0,2).map(contribution => <TopicCard topic={contribution}/>
                    )
            }
            </div>
        </div>
           
    )
}