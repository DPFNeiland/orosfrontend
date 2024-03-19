import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function EstadoCivil(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_196_422)" fill="#000" fillOpacity={0.1}>
        <Path d="M7.5 10a5 5 0 100-10 5 5 0 000 10zm0-8.333a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zM7.5 11.666a7.51 7.51 0 00-7.5 7.5.833.833 0 001.667 0 5.833 5.833 0 1111.666 0 .833.833 0 001.667 0 7.509 7.509 0 00-7.5-7.5zM18.333 6.563a1.756 1.756 0 00-1.666 1.833A1.756 1.756 0 0015 6.562a1.756 1.756 0 00-1.667 1.834c0 1.441 1.88 3.13 2.817 3.882a.827.827 0 001.033 0C18.12 11.528 20 9.838 20 8.396a1.756 1.756 0 00-1.667-1.834z" />
      </G>
      <Defs>
        <ClipPath id="clip0_196_422">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default EstadoCivil