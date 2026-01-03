import React from "react";
import "./honeycomb.css";

const Honeycomb: React.FC = () => {
  // --- CONFIGURATION ---
  const hexSize = 70;
  const strokeWidth = 1.2;
  const numRows = 8;
  const numCols = 10;
  // ---------------------

  const hexWidth = Math.sqrt(3) * hexSize;
  const hexHeight = 2 * hexSize;
  const xOffset = hexWidth;
  const yOffset = hexHeight * 0.75;

  // 1. Helper to calculate exact coordinates
  const getHexCenter = (row: number, col: number) => {
    const x = col * xOffset + (row % 2 === 1 ? xOffset / 2 : 0);
    const y = row * yOffset;
    return { x, y };
  };

  const getCorner = (row: number, col: number, cornerIndex: number) => {
    const { x, y } = getHexCenter(row, col);
    const angle_deg = 60 * cornerIndex - 30;
    const angle_rad = (Math.PI / 180) * angle_deg;
    const px = x + hexSize * Math.cos(angle_rad);
    const py = y + hexSize * Math.sin(angle_rad);
    return `${px.toFixed(1)} ${py.toFixed(1)}`;
  };

  const renderHexagons = () => {
    const hexagons = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const points = [];
        for (let i = 0; i < 6; i++) {
          points.push(getCorner(row, col, i));
        }
        hexagons.push(
          <polygon
            key={`${row}-${col}`}
            points={points.join(",")}
            className="hex-cell"
          />
        );
      }
    }
    return hexagons;
  };

  return (
    <div className="honeycomb-container">
      <svg
        className="honeycomb-svg"
        viewBox={`0 0 ${numCols * hexWidth} ${numRows * yOffset}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="honeycomb-grid" stroke="currentColor" strokeWidth={strokeWidth} fill="none">
          {renderHexagons()}
        </g>

     

        {/* Path 1: Smoother Horizontal Flow (Tracing more edges) */}
        <path
          className="energy-line path-1"
          d={`
            M ${getCorner(1, 1, 4)} 
            L ${getCorner(1, 1, 5)} 
            L ${getCorner(1, 1, 0)} 
            L ${getCorner(1, 1, 1)} 
            L ${getCorner(1, 2, 2)} 
            L ${getCorner(1, 2, 1)}
          `}
        />

        {/* Path 2: Perfectly Aligned S-Curve */}
        <path
          className="energy-line path-2"
          d={`
            M ${getCorner(3, 3, 5)} 
            L ${getCorner(3, 3, 0)} 
            L ${getCorner(3, 4, 3)} 
            L ${getCorner(3, 3, 1)} 
            L ${getCorner(3, 3, 2)}
          `}
        />

        {/* Path 3: Right Side - Corrected Vertical Flow */}
        <path
          className="energy-line path-3"
          d={`
            M ${getCorner(2, 7, 0)} 
            L ${getCorner(2, 7, 1)} 
            L ${getCorner(2, 7, 2)} 
            L ${getCorner(2, 8, 3)} 
            L ${getCorner(2, 8, 4)}
          `}
        />

   

        {/* Path 5: Top Right - Quick dart */}
        <path
          className="energy-line path-5"
          d={`
            M ${getCorner(1, 6, 5)} 
            L ${getCorner(1, 6, 0)} 
            L ${getCorner(1, 7, 3)}
            L ${getCorner(1, 7, 2)}
          `}
        />

         {/* Path 6: Far Left - Vertical zigzag down the edge */}
         <path
          className="energy-line path-6"
          d={`
            M ${getCorner(4, 0, 4)} 
            L ${getCorner(4, 0, 3)} 
            L ${getCorner(4, 0, 2)} 
            L ${getCorner(5, 0, 3)}
            L ${getCorner(6, 0, 4)}
          `}
        />

        {/* Path 7: Mobile Safe - Center Loop (Safe on Hex 1,4) */}
        <path
          className="energy-line path-7"
          d={`
            M ${getCorner(1, 4, 4)} 
            L ${getCorner(1, 4, 3)} 
            L ${getCorner(1, 4, 2)} 
            L ${getCorner(1, 4, 1)}
            L ${getCorner(1, 4, 0)}
          `}
        />


      </svg>
    </div>
  );
};

export default Honeycomb;