import { images } from "@src/assets";
import { BackButton, Button, MainContainer } from "@src/components";
import colors from "@src/theme/colors";
import metrics from "@src/theme/metrics";
import React, { useState } from "react";
import styled from "styled-components/native";

const CartList = () => {
  return <ContentContainer></ContentContainer>;
};

const EmptyCart = () => {
  return (
    <ContentContainer
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={images.sadCart}
        resizeMode="contain"
        style={{ tintColor: colors.primary }}
      />
      <TextMedium>Your cart is empty</TextMedium>
      <TextLight>
        Open "Food Items" to select a food. Free shipping from $20. Enjoy now!
      </TextLight>
    </ContentContainer>
  );
};

const Cart = () => {
  const [CartItems, setCartItems] = useState(null);
  return (
    <MainContainer showHeader LeftIcon={BackButton} label="Cart">
      {CartItems != null ? <CartList /> : <EmptyCart />}
      <Button btnType="solid" label="Track Order" onPress={() => null} />
    </MainContainer>
  );
};

export default Cart;

const ContentContainer = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: ${metrics.screenWidth * 0.35}px;
  height: ${metrics.screenWidth * 0.35}px;
`;
const Label = styled.Text`
  font-size: 16px;
  font-family: "SF_REGULAR";
  color: ${colors.textGrey};
`;
const TextMedium = styled.Text`
  font-size: 18px;
  text-align: center;
  font-family: "SF_MEDIUM";
  color: ${colors.textGrey};
  margin-top: ${metrics.spacing}px;
  padding: 0 ${metrics.spacing * 2}px;
`;
const TextLight = styled.Text`
  font-size: 16px;
  text-align: center;
  font-family: "SF_REGULAR";
  color: ${colors.gray};
  margin-top: ${metrics.spacing / 2}px;
  padding: 0 ${metrics.spacing * 2}px;
`;
