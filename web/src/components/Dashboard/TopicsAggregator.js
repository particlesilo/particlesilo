import React, {useState} from 'react'
import { styleClass } from '../../utils/style_class';
import { Link } from "react-router-dom";
import TopicsForm from './Topics/TopicsForm';

export const TopicsAggregator = ({topics}) => {
  const topicsL = ['Rolling in the Higgs', 'What is a Discovery?', 'Dark Matter']
  const topicsList = <Link to="/topic/${topicsL}"> {topicsL.map(topicsL => <h2>{topicsL}</h2>)} </Link>
  const [topicks, setTopics] = useState([]);


  const addTopic = topick =>{
     if (!topick.text || /^\s*$/.test(topick.text)) {
        return;
    }

    const newTopics = [topick, ...topicks];

    setTopics(newTopics);
    console.log(...topicks);
  };

  const updateTopic = (topicsId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
    return;
    }

    setTopics(prev => prev.map(item => (item.id === topicsId ? newValue : item)));
  };

  const removeTopic = id => {
    const removedArr = [...topicks].filter(topick => topick.id !== id);
    setTopics(removedArr);
  };

  return (
    <div className="rounded-lg bg-gray-300 w-auto h-96">
      <h1>Favorite Topics</h1>
      <div> {topicsList} </div>
      <TopicsForm onSubmit={addTopic}/>
    </div>
  )
};
