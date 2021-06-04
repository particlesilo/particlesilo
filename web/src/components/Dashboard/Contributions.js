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
            <div className="w-max mx-auto"> 
                <button className="bg-transparent hover:bg-red-400 border border-red-400 hover:border-transparent font-semibold py-2 px-4 rounded-xl text-white">
                    See more 
                </button>
            </div>
        </div>
           
    )
}