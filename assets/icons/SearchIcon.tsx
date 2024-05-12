import { SPACING } from "@/src/styles";
import { Circle, Path, Svg, SvgProps } from "react-native-svg";

function SearchIcon({
  width = SPACING.SCALE_20,
  height = SPACING.SCALE_20,
  ...rest
}: SvgProps) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <Circle
        cx="11.7666"
        cy="11.7666"
        r="8.98856"
        stroke="#212121"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.0183 18.4852L21.5423 22.0001"
        stroke="#212121"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
