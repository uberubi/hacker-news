import React from "react";
import { Loader } from "semantic-ui-react";

const Spinner = () => {
  return (
    <Loader
      active
      inline="centered"
      style={{ marginTop: "50px" }}
      size="huge"
    />
  );
};

export default Spinner;
