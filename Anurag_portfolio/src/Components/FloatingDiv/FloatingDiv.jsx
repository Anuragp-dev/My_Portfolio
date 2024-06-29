import React from 'react';
import './FloatingDiv.css'


//folding div


const FloatingDiv = ({image , text1 ,text2}) => {
  return (
<div className="floatingDiv">
      <img src={image} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
}

export default FloatingDiv;
