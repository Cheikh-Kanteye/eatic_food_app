import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  spacing: 16,
  inputSize: width - 32,
};

export default metrics;
