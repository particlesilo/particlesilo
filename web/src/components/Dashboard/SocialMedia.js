import React from 'react'
import { styleClass } from '../../utils/style_class'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const SocialMedia = (profile) => {
  return <div className="p-8">
    <p className="text-white text-xl">Contact</p>
    <div> 
    <FontAwesomeIcon icon={faCoffee} className="text-gray-500 text-xl z-10 h-full leading-snug text-center text-base items-center justify-center py-3 w-8"/>
    </div>
  </div>

};
