import {Dimensions, Platform} from "react-native";

export function isIphoneX() {
  const dimension_ = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimension_.height === 780 ||
      dimension_.width === 780 ||
      dimension_.height === 812 ||
      dimension_.width === 812 ||
      dimension_.height === 844 ||
      dimension_.width === 844 ||
      dimension_.height === 896 ||
      dimension_.width === 896 ||
      dimension_.height === 926 ||
      dimension_.width === 926)
  );
}
