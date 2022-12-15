import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import colors from "@src/theme/colors";
import { StackParamList } from "@src/utils/type";
import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";

type Props = NativeStackNavigationProp<StackParamList>;

const BackButton = () => {
  const navigation = useNavigation<Props>();
  return (
    <StyledBackButton onPress={navigation.goBack}>
      <Feather name="chevron-left" size={24} color={colors.primary} />
    </StyledBackButton>
  );
};

export default BackButton;

const StyledBackButton = styled.TouchableOpacity`
  width: 40px;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${colors.gray};
  border-radius: 20px;
`;
