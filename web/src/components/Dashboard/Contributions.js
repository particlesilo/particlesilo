import React from "react"; 
import { styleClass } from "../../utils/style_class";
import { TopicCard } from "./TopicCard";


export const Contributions = ({contributions, title}) => { 
    return ( 
        <div className="rounded-xl bg-darkPurple p-6 mt-8"> 
            <p className="text-white text-2xl">{title}</p>
            <div className="flex flex-row">
            {
                 contributions.slice(0,2).map(contribution => <TopicCard topic={contribution}/>
                    )
            }
            </div>
            <div className="w-max mx-auto"> 
                <button className={styleClass.btn.outline}>
                    See more 
                </button>
            </div>
        </div>
           
    )
}