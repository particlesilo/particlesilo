import React, {useState} from 'react';
import { styleClass } from '../../utils/style_class';
import { Link } from "react-router-dom";

export const TopicsAggregator = ({topicsAgg}) => {

  //const [todos, setTodos] = useState([]);

  const topics = ['Rolling in the Higgs', 'What is a Discovery?', 'Dark Matter Web']
  const topicsList = <Link to="/topic/example"> {topics.map(topics => <button className="rounded-lg bg-purple-600 hover:bg-green-500 py-2 px-4 text-white">{topics}</button>)}</Link>

  return <div className="rounded-lg bg-gray-300 w-auto h-96">
    <div>
      <button className="rounded-lg border-red-700 bg-gray-400 hover:bg-green-500 py-4 px-8 text-white">Favorite Topics</button>
    </div>
    <div>
      {topicsList}
    </div>

    <div>
        <button className="rounded-full bg-red-500 hover:bg-green-500 py-2 px-4 text-white">+ Add Topic </button>
    </div>
    </div>
};
