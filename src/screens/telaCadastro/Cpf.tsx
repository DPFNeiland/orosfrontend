import * as React from "react"
import Svg, { Rect, Path, G, Defs, ClipPath } from "react-native-svg"

function Cpf(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_197_452)" fill="#000" fillOpacity={0.1}>
        <Path d="M15.833 0H4.167A4.172 4.172 0 000 4.167v11.666A4.172 4.172 0 004.167 20h11.666A4.172 4.172 0 0020 15.833V4.167A4.172 4.172 0 0015.833 0zm-10 18.333V17.5a4.167 4.167 0 118.334 0v.833H5.833zm12.5-2.5a2.5 2.5 0 01-2.5 2.5V17.5a5.833 5.833 0 10-11.666 0v.833a2.5 2.5 0 01-2.5-2.5V4.167a2.5 2.5 0 012.5-2.5h11.666a2.5 2.5 0 012.5 2.5v11.666z" />
        <Path d="M10 3.334A3.333 3.333 0 1010 10a3.333 3.333 0 000-6.666zm0 5A1.667 1.667 0 1110 5a1.667 1.667 0 010 3.334z" />
      </G>
      <Defs>
        <ClipPath id="clip0_197_452">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Cpf
