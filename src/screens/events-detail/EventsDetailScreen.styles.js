import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { COLORS, FONT_SIZE } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    width: Dimensions.get("screen").width,
    height: 300,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    // marginBottom: 0,
  },
  Events: {
    fontSize: 18,
    color: "#444",
    marginBottom: 5,
  },
  date: {
    fontSize: 18,
    color: "#444",
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  hour: {
    fontSize: 18,
    color: "#444",
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: 10,
    textAlign: "justify",
  },
  map: {
    height: 250,
    marginVertical: 20,
    borderRadius: 10,
  },
  linkContainer: {
    flexDirection: 'row'
  },
  webButton: {
    textAlign: "center",
    backgroundColor: COLORS.darkblue,
    color: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    marginTop: 10,
    marginHorizontal: 10
  },
});
