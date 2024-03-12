import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Cadeado(props: any) {
  return (
    <Svg
      width={18}
      height={20}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.833 7.02V5.833a5.833 5.833 0 10-11.666 0V7.02a4.167 4.167 0 00-2.5 3.813v5A4.172 4.172 0 004.833 20h8.334a4.172 4.172 0 004.166-4.167v-5a4.166 4.166 0 00-2.5-3.813zm-5 7.147a.833.833 0 01-1.666 0V12.5a.833.833 0 011.666 0v1.667zm3.334-7.5H4.833v-.834a4.167 4.167 0 018.334 0v.834z"
        fill="#000"
        fillOpacity={0.1}
      />
    </Svg>
  )
}

export default Cadeado
