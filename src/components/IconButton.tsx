import { SimpleLineIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import colors from "@src/theme/colors";
import { StackParamList } from "@src/utils/type";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

interface Props {
  icon: keyof typeof SimpleLineIcons.glyphMap;
  size?: number;
  bd?: number;
  primary?: boolean;
  onPress?: () => void;
}

const IconButton = ({ icon, size, bd, primary, onPress }: Props) => {
  return (
    <Button
      onPress={onPress}
      style={{
        width: !size ? 35 : size,
        borderRadius: !bd ? 20 : bd,
        backgroundColor: primary ? colors.primary : colors.white,
        borderWidth: primary ? 0 : StyleSheet.hairlineWidth,
      }}
    >
      <SimpleLineIcons
        name={icon}
        size={18}
        color={primary ? colors.white : colors.primary}
      />
    </Button>
  );
};

export default IconButton;

const Button = styled.TouchableOpacity`
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-color: ${colors.gray};
`;
