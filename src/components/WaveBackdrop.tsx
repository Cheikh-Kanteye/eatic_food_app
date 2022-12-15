import metrics from "@src/theme/metrics";
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";

interface Props {
  style?: StyleProp<ViewStyle>;
}

const WaveBackdrop = ({ style }: Props) => {
  return (
    <Container style={style}>
      <ContentContainer>
        <CircleContainer>
          <Circle />
        </CircleContainer>
      </ContentContainer>
    </Container>
  );
};

export default WaveBackdrop;

export const circleSize = metrics.screenWidth * 0.9;

const Circle = styled.View`
  width: ${circleSize * 0.4}px;
  height: ${circleSize * 0.4}px;
  border-radius: ${(circleSize * 0.4) / 2}px;
  background-color: #ed1c24;
  justify-content: center;
  align-items: center;
`;
const CircleContainer = styled.View`
  width: ${circleSize * 0.6}px;
  height: ${circleSize * 0.6}px;
  border-radius: ${(circleSize * 0.6) / 2}px;
  background-color: #ff8589;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.View`
  width: ${circleSize * 0.8}px;
  height: ${circleSize * 0.8}px;
  border-radius: ${(circleSize * 0.8) / 2}px;
  background-color: #ffaeb1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: ${circleSize}px;
  height: ${circleSize}px;
  border-radius: ${circleSize / 2}px;
  background-color: #ffc9cb;
  justify-content: center;
  align-items: center;
`;
