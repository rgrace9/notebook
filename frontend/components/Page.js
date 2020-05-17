import styled, { ThemeProvider, injectGlobal } from "styled-components";
import React from "react";

const Page = (props) => {
  return <div>{props.children}</div>;
};

export default Page;
