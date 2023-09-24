import * as React from "react";
import Svg, { G, Polygon } from "react-native-svg";
const HomeIcon = (props) => (
  <Svg
    fill="#000000"
    width={props.width}
    height={props.height}
    viewBox="0 0 24.00 24.00"
    id="home-alt-3"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={props.active ? "#fff" : "#919191"}
      strokeWidth={2.976}
    >
      <Polygon
        id="secondary"
        points="19 11 19 21 14 21 14 14 10 14 10 21 5 21 5 11 3 11 12 2 21 11 19 11"
        style={{
          fill: "rgba(0, 0, 0, 0)",
          strokeWidth:1.2,
        }}
      />
      <Polygon
        id="primary"
        points="19 11 19 21 14 21 14 14 10 14 10 21 5 21 5 11 3 11 12 2 21 11 19 11"
        style={{
          fill: "none",
          stroke: props.active ? "#fff" : "rgba(0, 0, 0, 0)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 0.4800000000000001,
        }}
      />
    </G>
    <G id="SVGRepo_iconCarrier">
      <Polygon
        id="secondary"
        points="19 11 19 21 14 21 14 14 10 14 10 21 5 21 5 11 3 11 12 2 21 11 19 11"
        style={{
          fill: props.active ? "#fff" : "rgba(0, 0, 0, 0)",
          strokeWidth: 0.648,
        }}
      />
      <Polygon
        id="primary"
        points="19 11 19 21 14 21 14 14 10 14 10 21 5 21 5 11 3 11 12 2 21 11 19 11"
        style={{
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 0.648,
        }}
      />
    </G>
  </Svg>
);
export default HomeIcon;
