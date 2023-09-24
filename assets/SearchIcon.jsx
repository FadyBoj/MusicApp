import * as React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";
const SearchIcon = (props) => (
  <Svg
    fill="#ffff"
    width={props.width}
    height={props.height}
    viewBox="0 0 24.00 24.00"
    id="search-alt-2"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    stroke="#fff"
    transform="matrix(1, 0, 0, 1, 0, 0)"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#fff"
      strokeWidth={0.048}
    />
    <G id="SVGRepo_iconCarrier">
      <Circle
        id="secondary"
        cx={11}
        cy={11}
        r={8}
        style={{
          fill: props.active ? "#fff" : "rgba(0, 0, 0, 0)",
          strokeWidth: 0.744,
        }}
      />
      <Path
        id="primary"
        d="M21,21l-4.34-4.34M11,3a8,8,0,1,0,8,8A8,8,0,0,0,11,3Z"
        style={{
          fill: "none",
          stroke: props.active ? "#fff" : "#919191",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.744,
        }}
      />
    </G>
  </Svg>
);
export default SearchIcon;
