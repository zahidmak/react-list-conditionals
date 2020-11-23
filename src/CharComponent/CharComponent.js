import React from 'react'
import './CharComponent.css'

const charcomponent = (props) => {
 
return(
<p className="CharComponent" onClick={props.click}>{props.char}</p>
);
}

export default charcomponent;