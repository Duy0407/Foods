import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Text } from "../Themed";

export interface ButtonProps {
    text?: string;
    // radius?: ButtonRadius;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children?: JSX.Element;
    onPress?: () => void;
}

export function Button(props: ButtonProps) {
    const {text, style, textStyle, children, onPress} = props
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            {children}
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
}