import React from "react";
import { useParams } from "react-router-dom";
import { styleClass } from "../../utils/style_class";

export const TopicPage = () => {
    const { id } = useParams();
    console.log(id)
    return(
        <div>
          <button className="rounded-lg bg-red-500 hover:bg-green-500 py-2 px-4">Add Source</button>
        </div>
    )
}
