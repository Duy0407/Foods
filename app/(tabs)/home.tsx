import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { SPACING, TYPOGRAPHY, Colors } from "@/src/styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "@/src/styles/styles";
import { CartIcon, MenuIcon, SearchIcon } from "@/assets/icons";
import Item from "@/components/Home/Item";
import { categories } from "@/constants/constants";
import { useState } from "react";

const listItem = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);
  const handleNavigateItem = () => {
    console.log("adadadad");
  }
  return (
    <SafeAreaView style={[globalStyles.safeArea]}>
      <View style={styles.container}>
        <View style={[styles.header, globalStyles.background]}>
          <View style={[globalStyles.background, styles.header_icon]}>
            <MenuIcon />
            <CartIcon />
          </View>
          <Text style={styles.title}>Delicious food for you</Text>
          <View style={styles.search}>
            <View style={styles.search_icon}>
              <SearchIcon />
            </View>
            <TextInput
              placeholder="Search"
              placeholderTextColor={Colors.text}
              style={{
                paddingVertical: SPACING.SCALE_20,
                paddingRight: SPACING.SCALE_20,
                paddingLeft: 70,
                backgroundColor: "#EFEEEE",
                borderRadius: SPACING.SCALE_50,
                fontSize: TYPOGRAPHY.FONT_SIZE_17,
                fontFamily: TYPOGRAPHY.MPLUSRounded1cExtraBold,
              }}
            />
          </View>
        </View>
        <View style={[globalStyles.background, styles.content]}>
          <View style={[globalStyles.background, styles.category]}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedCategory(item.value)}
                style={[
                  selectedCategory === item.value && {
                    borderBottomWidth: 3,
                    borderColor: Colors.mainColor,
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: TYPOGRAPHY.FONT_SIZE_17,
                    padding: SPACING.SCALE_10,
                    color:
                      selectedCategory === item.value
                        ? Colors.mainColor
                        : Colors.text,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: TYPOGRAPHY.FONT_SIZE_15,
              color: Colors.mainColor,
              textAlign: "right",
              marginBottom: SPACING.SCALE_20,
              marginRight: SPACING.SCALE_50,
            }}
          >
            see more
          </Text>
          <View style={[styles.item, globalStyles.background]}>
            <FlatList
              data={listItem}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <Item onPress={handleNavigateItem}/>}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: SPACING.SCALE_30,
                    backgroundColor: "transparent",
                  }}
                />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.SCALE_50,
  },
  header: {
    paddingHorizontal: SPACING.SCALE_50,
  },
  header_icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.SCALE_40,
  },
  title: {
    fontFamily: TYPOGRAPHY.MPLUSRounded1cExtraBold,
    fontSize: TYPOGRAPHY.FONT_SIZE_34,
    lineHeight: TYPOGRAPHY.LINE_HEIGHT_40,
    paddingRight: SPACING.SCALE_90,
    marginBottom: SPACING.SCALE_28,
  },
  search: {
    backgroundColor: "transparent",
    position: "relative",
    marginBottom: SPACING.SCALE_40,
  },
  search_icon: {
    position: "absolute",
    zIndex: 1,
    backgroundColor: "transparent",
    height: "100%",
    justifyContent: "center",
    left: SPACING.SCALE_30,
  },
  content: {},
  category: {
    paddingLeft: SPACING.SCALE_50,
    display: "flex",
    flexDirection: "row",
    gap: SPACING.SCALE_20,
    marginBottom: SPACING.SCALE_30
  },
  item: {
    paddingLeft: SPACING.SCALE_45,
  },
});
