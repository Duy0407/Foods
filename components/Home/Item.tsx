import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";
import { Colors, SPACING, TYPOGRAPHY } from "@/src/styles";

interface IProps {
  onPress?: () => void;
}

function Item({ onPress }: IProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}
    >
      <View style={styles.container_image}>
        <View style={styles.image}></View>
      </View>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.title}>Veggie Tomato Mix</Text>
          <Text style={styles.price}>N1,900</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Item;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 320,
    backgroundColor: "transparent",
    position: "relative",
  },
  container_image: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  image: {
    width: 164,
    height: 164,
    backgroundColor: "red",
    borderRadius: 80,
  },
  content: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: SPACING.SCALE_30,
    marginTop: SPACING.SCALE_55,
  },
  info: {
    flex: 1,
    marginBottom: SPACING.SCALE_40,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: SPACING.SCALE_15,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: TYPOGRAPHY.FONT_SIZE_22,
    lineHeight: TYPOGRAPHY.LINE_HEIGHT_26,
    paddingHorizontal: SPACING.SCALE_40,
    textAlign: "center",
    fontFamily: TYPOGRAPHY.MPLUSRounded1cExtraBold,
  },
  price: {
    color: Colors.mainColor,
    fontSize: TYPOGRAPHY.FONT_SIZE_17,
    lineHeight: TYPOGRAPHY.LINE_HEIGHT_20,
  },
});
