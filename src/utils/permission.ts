import { PermissionsAndroid } from "react-native";

type Props = {
  setPermission: (value: boolean) => void;
};

const requestLocationPermission = async ({ setPermission }: Props) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Eatic Location Permission",
        message: "Eatic App needs access to your Location ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setPermission(true);
    } else {
      setPermission(false);
    }
  } catch (err) {
    console.log("Access denied");
  }
};

export default requestLocationPermission;
