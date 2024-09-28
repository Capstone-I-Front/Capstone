import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = ({props}) => {
  return (
    <Container>
      <Header />
      <Layout>{props}</Layout>
      <Footer />
    </Container>
  );
};

export default Main;