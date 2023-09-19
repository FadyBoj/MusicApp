import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const EmailIcon = (props) => (
  <Svg
    fill="#000000"
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    id="email"
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
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        id="secondary"
        d="M20.61,5.23l-8,6.28a1,1,0,0,1-1.24,0l-8-6.28A1,1,0,0,0,3,6V18a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V6A1,1,0,0,0,20.61,5.23Z"
        style={{
          fill: "#000",
          strokeWidth: 2,
        }}
      />
      <Path
        id="primary"
        d="M20,19H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H20a1,1,0,0,1,1,1V18A1,1,0,0,1,20,19ZM20,5H4a1,1,0,0,0-.62.22l8,6.29a1,1,0,0,0,1.24,0l8-6.29A1,1,0,0,0,20,5Z"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </G>
  </Svg>
);
export default EmailIcon;
