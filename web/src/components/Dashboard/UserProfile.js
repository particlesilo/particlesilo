import React from 'react'
import { styleClass } from '../../utils/style_class'

export const UserProfile = (profile) => {
  return <div className="rounded-lg bg-indigo-700 w-auto h-96">
  <div>
    <button className="rounded-lg border-red-700 bg-gray-400 hover:bg-green-500 py-4 px-8 text-white">Juan Niyebe</button>
  </div>

  <div>
    <button className="rounded-full border-red-700 bg-gray-300 hover:bg-green-500 h-40 w-40 flex items-center justify-center text-white">Juan's Photo</button>
  </div>
  <div>
      <button className="rounded-full bg-red-500 hover:bg-green-500 py-3 px-6 text-white">Follow </button>
  </div>
  </div>
};
