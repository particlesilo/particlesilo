import React from 'react'
import { styleClass } from '../../utils/style_class'

export const UserProfile = (profile) => {
  return <div className="w-auto p-8 justify-between border-b-2 border-purpleStroke">
  <div className="mx-auto w-max">
    <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" className="rounded-full border-red-400 h-40 w-40"/>
    {/* <button className="rounded-full border-red-700 hover:bg-green-500 h-40 w-40 flex items-center justify-center text-white" style={{background:"url(https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg)"}}>Juan's Photo</button> */}
  </div>
    <p className="font-bold break-all text-4xl text-white mx-auto w-max p-2">Juan Niyebe</p>
    <p className="text-sm text-gray-600 p-2">Experimental Particle Physicist, Part-time Comedian, Loves dragons</p>
    {/* <button className="rounded-lg border-red-700 bg-gray-400 hover:bg-green-500 py-4 px-8 text-white">Juan Niyebe</button> */}
  <div className="mx-auto w-max">
      <button className={styleClass.btn.outline}>Follow </button>
  </div>
  </div>
};
