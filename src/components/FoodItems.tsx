import { View, Text } from "react-native";
import React from "react";
import FoodItemsTab from "./FoodItemsTab";
import styled from "styled-components/native";
import metrics from "@src/theme/metrics";

const FoodItems = () => {
  return (
    <Container>
      <FoodItemsTab />
    </Container>
  );
};

export default FoodItems;

const Container = styled.View`
  margin: 0 0 ${metrics.spacing}px 0;
`;
