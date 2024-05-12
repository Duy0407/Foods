import { Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import FoodLogo from '@/assets/images/Logo.png'
import { Colors, SPACING, TYPOGRAPHY } from "@/src/styles";

export default function Logo() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Image source={FoodLogo} style={{ width: SPACING.SCALE_40, height: SPACING.SCALE_40 }}/>
            <Text style={styles.textLogo}>FOODS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textLogo: {
      fontSize: TYPOGRAPHY.FONT_SIZE_30,
      fontFamily: 'DancingScript',
      color: Colors.mainColor,
      lineHeight: TYPOGRAPHY.LINE_HEIGHT_32
    },
  });