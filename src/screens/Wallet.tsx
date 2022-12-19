import { BackButton, MainContainer } from "@src/components";
import React from "react";

const Wallet = () => {
  return (
    <MainContainer
      showHeader
      LeftIcon={BackButton}
      label="Wallet"
    ></MainContainer>
  );
};

export default Wallet;
