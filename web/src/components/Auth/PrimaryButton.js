import React from 'react'; 
import { styleClass } from '../../utils/style_class';

export const PrimaryButton = ({text, onClick}) => {
    return(
        <button className={styleClass.btn.fillBlueGradient} onClick={onClick}>
            {text}
        </button>
    ) 
}