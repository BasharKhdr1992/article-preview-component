import React from 'react';

const Polygon = () => {
  return (
    <svg height="15" id="triangle" className="collapse" width="30">
      <polygon
        points="0,0 14,14 28,0"
        fill="hsl(217, 19%, 35%)"
        stroke="hsl(217, 19%, 35%)"
        strokeWidth={1}
      />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
};

export default Polygon;
