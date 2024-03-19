import * as React from "react"
import Svg, { G, Circle, Path, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Policia(props: any) {
  return (
    <Svg
      width={83}
      height={83}
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_d_372_101)">
        <Circle cx={41.5} cy={37.5} r={37.5} fill="#142944" />
      </G>
      <G clipPath="url(#clip0_372_101)">
        <Path
          d="M45.462 24.5h-8.925a4.991 4.991 0 014.317-2.5h.292a4.99 4.99 0 014.316 2.5zm6.163 15H51V42a1.25 1.25 0 11-2.5 0v-2.5h-15V42a1.25 1.25 0 11-2.5 0v-2.5h-.625a4.365 4.365 0 00-.625 8.686V49.5a2.5 2.5 0 005 0v-1.25h12.5v1.25a2.5 2.5 0 005 0v-1.311A4.323 4.323 0 0056 43.913v-.038a4.375 4.375 0 00-4.375-4.375zm-23.59-1.886A7.45 7.45 0 0131 37h20c1.02 0 2.029.208 2.965.614l-1.93-6.215A6.217 6.217 0 0046.066 27H35.934a6.217 6.217 0 00-5.97 4.398l-1.93 6.216z"
          fill="#0057FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_372_101">
          <Path fill="#fff" transform="translate(26 22)" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Policia
