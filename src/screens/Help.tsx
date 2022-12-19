import { BackButton, MainContainer } from "@src/components";
import React from "react";

const Help = () => {
  return (
    <MainContainer
      showHeader
      LeftIcon={BackButton}
      label="Help"
    ></MainContainer>
  );
};

export default Help;
