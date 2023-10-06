import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const PauseIcon = (props) => (
  <Svg
    fill="#fff"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path d="M18.432 7.5h4.547v17h-4.547zM9.022 7.5h4.545v17H9.022z" />
    </G>
  </Svg>
);
export default PauseIcon;
 