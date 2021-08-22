import React from "react";
import { useParams } from "react-router-dom";
import { styleClass } from "../../utils/style_class";
import { BrowserRouter as Router } from "react-router-dom";

import { Contributions } from '../Dashboard/Contributions'
import { Downloads } from '../Dashboard/Contributions'
import { TopicsAggregator } from "../Dashboard/TopicsAggregator"
import { TopicsFolder } from "../Dashboard/TopicsAggregator"

export const TopicPage = ({}) => {
    const { id } = useParams();
    console.log(id)
    return(
        <div>

          <div className="w-3/12 rounded-lg bg-darkPurple h-3/6">
            <p className="text-white text-xl">{id}</p>
          </div>
          <div className="w-9/12 m-8">
            <TopicsFolder topicsAgg={{}} />
            <div className="mx-auto w-max p-2">
              <button className="rounded-lg bg-red-500 hover:bg-green-500 py-2 px-4">Add Source</button>
            </div>

          </div>
            {/* <Visuals visuals={{}} /> */}

        </div>

    )
}
