import React from "react";
import { useParams } from "react-router-dom";

export const TopicPage = () => {
    const { id } = useParams();
    console.log(id)
    return(
        <div>
            Topic Content
        </div>
    )
}
