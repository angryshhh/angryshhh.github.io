import React from 'react';
import './Background.css';

const Background: React.FC = () => {
  return <div className="Background">
    <div className="T">
      <div className="TLeft" />
      <div className="TRight" />
    </div>
    <div className="R">
      <div className="RUp" />
      <div className="RDown">
        <div className="RDownLeft" />

        <div className="RDownRight" />
      </div>
    </div>
  </div>;
};

export default Background;
