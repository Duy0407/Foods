import { SPACING } from "@/src/styles";
import { Path, Svg } from "react-native-svg";

function MenuIcon({
  width = SPACING.SCALE_25,
  height = SPACING.SCALE_17,
  ...rest
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 25 17" fill="none" {...rest}>
      <Path
        d="M1.59857 8.33333H13.5M1.59857 1H23.5986M1.59857 15.6667H23.5986"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MenuIcon;
