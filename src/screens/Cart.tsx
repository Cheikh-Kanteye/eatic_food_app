import { BackButton, MainContainer } from "@src/components";
import React from "react";
import styled from "styled-components/native";

const Cart = () => {
  return (
    <MainContainer showHeader LeftIcon={BackButton} label="Cart">
      <ContentContainer></ContentContainer>
    </MainContainer>
  );
};

export default Cart;

const ContentContainer = styled.View`
  flex: 1;
`;
