import React from 'react' 
 
export const TopicCard = ({topic}) => { 
    return ( 
        <div className="m-4">
            <img src={topic.imgUrl}/>
            <div className="flex flex-row justify-between mt-2"> 
                <div className="border-r-2 w-9/12 border-purpleStroke"> 
                    <div className="text-sm text-white">{topic.author}</div>
                    <div className="text-lg text-white">{topic.title}</div>
                </div>
                <div className="text-gray-500"> 
                    <div>{topic.date}</div>
                    <div>{topic.length} mins read</div>
                </div>
            </div> 
        </div>
    )
}