import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Gmail(props: any) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_155_32)" fill="#000" fillOpacity={0.1}>
        <Path d="M17.965 4.156l-6.313 6.314a3.755 3.755 0 01-5.304 0L.035 4.156C.024 4.275 0 4.382 0 4.5v9a3.754 3.754 0 003.75 3.75h10.5A3.754 3.754 0 0018 13.5v-9c0-.118-.024-.225-.035-.344z" />
        <Path d="M10.591 9.41l6.851-6.852A3.739 3.739 0 0014.25.75H3.75A3.74 3.74 0 00.558 2.558l6.85 6.851a2.255 2.255 0 003.183 0z" />
      </G>
      <Defs>
        <ClipPath id="clip0_155_32">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Gmail