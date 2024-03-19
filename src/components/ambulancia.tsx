import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Ambulancia(props: any) {
  return (
    <Svg
      width={83}
      height={83}
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_372_102)">
        <Circle cx={41.5} cy={37.5} r={37.5} fill="#142944" />
      </G>
      <G clipPath="url(#clip0_372_102)">
        <Path
          d="M41 53a5 5 0 01-5-5v-5h-5a5 5 0 110-10h5v-5a5 5 0 1110 0v5h5a5 5 0 110 10h-5v5a5 5 0 01-5 5z"
          fill="#F30E0E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_372_102">
          <Path fill="#fff" transform="translate(26 23)" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Ambulancia
