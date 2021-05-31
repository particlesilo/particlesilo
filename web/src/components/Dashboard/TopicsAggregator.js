import React from 'react'
import { styleClass } from '../../utils/style_class'

export const TopicsAggregator = (topics) => {
  return (
    //
    <div className="rounded-lg bg-gray-300 w-auto h-96">
      <div class="grid grid-cols-1 md:grid-cols-4">
        <button type="button" onclick="alert('Create Topics')">Topics</button>

        <div class="mt-12 flex justify-center">
          <div class="btn bg-secondary-100 text-secondary-200">Load more</div>
        </div>
      </div>
    </div>
  )
};
