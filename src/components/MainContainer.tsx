import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface Props {
  label?: string;
  children?: React.ReactNode;
  showHeader?: boolean;
  LeftIcon?: React.ElementType;
  RightIcon?: React.ElementType;
}

const MainContainer = ({
  label,
  showHeader,
  children,
  RightIcon,
  LeftIcon,
}: Props) => {
  return (
    <Container>
      {showHeader && (
        <Header>
          {LeftIcon ? <LeftIcon /> : <EmptyView />}
          {label ? <HeaderText>{label}</HeaderText> : <EmptyView />}
          {RightIcon ? <RightIcon /> : <EmptyView />}
        </Header>
      )}
      {children}
    </Container>
  );
};

export default MainContainer;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.white};
  padding: 0 ${metrics.spacing}px;
`;
const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const EmptyView = styled.View`
  width: 40px;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  color: ${colors.textGrey};
  font-family: "SF_MEDIUM";
`;
