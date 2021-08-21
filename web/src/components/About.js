import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://cds.cern.ch/record/2230893/files/HiggsWW.gif?subformat=icon-1440',
  'https://cds.cern.ch/record/2461231/files/icon1440-2002-06-020_X_CERN_00677_0002.jpg?subformat=icon-1440',
  'https://cds.cern.ch/record/2777102/files/HIG-20-005_0.png?version=1'
];

export const About = () => {
    return(
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>
    )
}
