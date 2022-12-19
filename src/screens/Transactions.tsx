import { BackButton, MainContainer } from "@src/components";
import React from "react";

const Transactions = () => {
  return (
    <MainContainer
      showHeader
      LeftIcon={BackButton}
      label="Transactions"
    ></MainContainer>
  );
};

export default Transactions;
