import { BackButton, MainContainer } from "@src/components";
import React from "react";

const Order = () => {
  return (
    <MainContainer
      showHeader
      LeftIcon={BackButton}
      label="Order"
    ></MainContainer>
  );
};

export default Order;
