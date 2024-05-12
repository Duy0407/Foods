import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { SPACING, TYPOGRAPHY, Colors } from "../src/styles";
import { Button } from "../components/Button/Button";
import Logo from "@/assets/images/Logo2.png";
import Women from "@/assets/images/woman.png";
import Man from "@/assets/images/man.png";
import { useRouter } from "expo-router";

function FirstPage() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.content}>
        <View style={{ paddingLeft: SPACING.SCALE_40 }}>
          <View style={styles.logo}>
            <Image
              source={Logo}
              style={{ width: SPACING.SCALE_50, height: SPACING.SCALE_50 }}
            />
          </View>
          <Text style={styles.title}>Food For Everyone</Text>
        </View>

        <View
          style={{
            position: "relative",
            width: "100%",
            height: SPACING.SCALE_500,
          }}
        >
          <View
            style={{ position: "absolute", left: -SPACING.SCALE_60, bottom: 0, zIndex: 1 }}
          >
            <Image
              source={Women}
              style={{ width: SPACING.SCALE_400, height: SPACING.SCALE_480 }}
            />
          </View>
          <View style={{position: 'absolute', right: -SPACING.SCALE_70, bottom: 0,}}>
            <Image
              source={Man}
              style={{ width: SPACING.SCALE_300, height: SPACING.SCALE_380 }}
            />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Button
            text="Get starteed"
            style={styles.buttonStyle}
            textStyle={styles.textStyle}
            onPress={handleNavigate}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default FirstPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.mainColor,
  },
  content: {
    paddingTop: SPACING.SCALE_50,
    paddingBottom: SPACING.SCALE_30,
    height: "100%",
    justifyContent: "space-between",
  },
  buttonStyle: {
    width: SPACING.SCALE_300,
    backgroundColor: "#FFFFFF",
    borderRadius: SPACING.SCALE_30,
  },
  textStyle: {
    fontSize: TYPOGRAPHY.FONT_SIZE_18,
    lineHeight: TYPOGRAPHY.LINE_HEIGHT_20,
    color: Colors.mainColor,
    paddingVertical: SPACING.SCALE_20,
    textAlign: "center",
    fontWeight: "600",
  },
  logo: {
    paddingHorizontal: SPACING.SCALE_12,
    paddingVertical: SPACING.SCALE_10,
    backgroundColor: Colors.white,
    alignSelf: "flex-start",
    borderRadius: SPACING.SCALE_50,
    marginBottom: SPACING.SCALE_40,
  },
  title: {
    fontFamily: TYPOGRAPHY.MPLUSRounded1cExtraBold,
    fontSize: TYPOGRAPHY.FONT_SIZE_46,
    lineHeight: TYPOGRAPHY.LINE_HEIGHT_50,
    color: Colors.white,
  },
});
