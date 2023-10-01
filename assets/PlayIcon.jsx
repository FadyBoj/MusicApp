import * as React from "react";
import Svg, { G, Defs, Polygon } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title, desc */
const PlayIcon = (props) => (
  <Svg
  style={{transform:[{translateX:2}]}}
    width={props.width}
    height={props.height}
    viewBox="-0.5 0 8 8"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="#000000"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Defs />
      <G
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <G
          id="Dribbble-Light-Preview"
          transform="translate(-427.000000, -3765.000000)"
          fill="#ffffff"
        >
          <G id="icons" transform="translate(56.000000, 160.000000)">
            <Polygon id="play-[#1001]" points="371 3605 371 3613 378 3609" />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);
export default PlayIcon;
