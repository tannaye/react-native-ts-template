import {Dimensions, Platform} from "react-native";
import DeviceInfo from "react-native-device-info";
import {isIphoneX} from "./iPhoneX";
/**
 * The DEFAULT_WIDTH defined by Figma Design
 * The size number will get on Figma Design
 *
 * @param {number} size
 */

// @ts-ignore
export const isPadOrTablet = () => Platform.isPad || DeviceInfo.isTablet();

const DEFAULT_WIDTH = isPadOrTablet() ? 768 : 414;
const width = Dimensions.get("window").width;
export const height = Dimensions.get("window").height;
//Iphone X/XS/11 Pro
const DESIGN_HEIGHT = 812;
const tempFullWidth = width < height ? width : height;

export const scaleBySize = (size: number) => {
  return (tempFullWidth * size) / DEFAULT_WIDTH;
};

export const scaleHeightBySize = (size: number) => {
  return (height * size) / 896;
};

/**
 * Responsive by width screen. (Image Size)
 */
const scale = (size: number) => {
  return (width / DEFAULT_WIDTH) * size;
};

/**
 * Responsive by height screen.
 */
const verticalScale = (size: number) => {
  return (height / DESIGN_HEIGHT) * size;
};

/**
 * @alias Responsive for padding - margin - fontSize.
 */
const moderateScale = (size: number, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

export const getSize = {
  m: moderateScale,
  s: scale,
  v: verticalScale,
};

export const StatusBarHeight = Platform.select({
  ios: isIphoneX() ? 65 : 35,
  android: 5 + 24, // Height status bar default : 24
  default: 0,
});

export const getDefaultHeaderHeight = () => {
  const isLandscape = width > height;
  let headerHeight;
  if (Platform.OS === "ios") {
    if (isLandscape && !Platform.isPad) {
      headerHeight = 32;
    } else {
      headerHeight = 44;
    }
  } else if (Platform.OS === "android") {
    headerHeight = 56 + 10; //default 56
  } else {
    headerHeight = 64;
  }
  return headerHeight + StatusBarHeight;
};
