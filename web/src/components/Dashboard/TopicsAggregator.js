import React, {useState} from 'react';
import { styleClass } from '../../utils/style_class';
import { Link } from "react-router-dom";

export const TopicsAggregator = ({topicsAgg}) => {

  //const [todos, setTodos] = useState([]);

  const topics = ['Rolling in the Higgs', 'What is a Discovery?', 'Dark Matter Web', 'Luminosity']
  // const topicsList = <Link to="/topic/example"> {topics.map(topics => <button className="rounded-lg bg-purple-600 hover:bg-green-500 py-2 px-4 text-white">{topics}</button>)}</Link>
  //const topicsList = <Link to="/topic/example"> {topics.map(topics => <a className="text-gray-500 hover:underline p-1">{topics}</p>)}</Link>
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

export const TopicsFolder = ({topicsFolder}) => {

  const topics = ['Luminosity vs Collision Rate', 'HL-LHC', 'Luminosity vs Energy by Don Lincoln']
  const links = [
                  'https://home.cern/news/opinion/cern/luminosity-why-dont-we-just-say-collision-rate',
                  'https://www.bnl.gov/newsroom/news.php?a=217687',
                  'https://www.youtube.com/watch?v=5bz7jnq8rkQ'
                ]



  const topicsList = topics.map(t => <Link to={`/topic/${t}`}><p className="text-gray-500 hover:underline p-1">{t}</p></Link>)

  return (
  <div className="p-8 border-b-2 border-purpleStroke">
    <p className="text-white text-xl"></p>
    {/* <div>
      <button className="rounded-lg border-red-700 bg-gray-400  hover:bg-green-500 py-4 px-8 text-white">Favorite Topics</button>
    </div> */}
    <div>
      <a className="text-white text-l" url="https://home.cern/news/opinion/cern/luminosity-why-dont-we-just-say-collision-rate">Luminosity vs Collision Rate</a>
    </div>
    <div>
      <a className="text-white text-l" href="https://www.bnl.gov/newsroom/news.php?a=217687">HL-LHC</a>
    </div>
    <div>
      <a className="text-white text-l" href="https://www.youtube.com/watch?v=5bz7jnq8rkQ">Luminosity vs Energy</a>
    </div>
  </div>
  );
};
