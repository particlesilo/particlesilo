import React from 'react'
import { styleClass } from '../../utils/style_class';
import { Link } from "react-router-dom";

export const TopicsAggregator = ({topics}) => {
  return <div className="rounded-lg bg-gray-300 w-auto h-96">
    <h2>Topics </h2>
    <div> 
      <Link to="/topic/example"> Example Text</Link>
    </div>
    </div>
};
