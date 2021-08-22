import React, {useState} from 'react';
import { styleClass } from '../../utils/style_class';
import { Link } from "react-router-dom";

export const TopicsFolder = ({topicsFolder}) => {

  //const [todos, setTodos] = useState([]);

  const topics = ['Rolling in the Higgs', 'What is a Discovery?', 'Dark Matter Web']
  // const topicsList = <Link to="/topic/example"> {topics.map(topics => <button className="rounded-lg bg-purple-600 hover:bg-green-500 py-2 px-4 text-white">{topics}</button>)}</Link>
  //const topicsList = <Link to="/topic/example"> {topics.map(topics => <p className="text-gray-500 hover:underline p-1">{topics}</p>)}</Link>
  //const topicsList = topics.map(t => <Link to="/topic/example"><p className="text-gray-500 hover:underline p-1">{t}</p></Link>)
  const topicsList = topics.map(t => <Link to={`/topic/${t}`}><p className="text-gray-500 hover:underline p-1">{t}</p></Link>)
  //const topicsList = <NavLink exact to="/topic/topicName" activeClassName={}> {topics.map(topics => <p className="text-gray-500 hover:underline p-1">{topics}</p>)}</Link>

  return (
  <div className="p-8 border-b-2 border-purpleStroke">
    <p className="text-white text-xl">Topics</p>
    {/* <div>
      <button className="rounded-lg border-red-700 bg-gray-400  hover:bg-green-500 py-4 px-8 text-white">Favorite Topics</button>
    </div> */}
    <div>
      {topicsList}
    </div>
    <div className="mx-auto w-max p-2">
        <button className={styleClass.btn.outline}>+ Add Topic </button>
    </div>
  </div>
  );
};
