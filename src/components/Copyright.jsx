import styled from "styled-components";

const Container = styled.div`
  background: teal;
  height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500px;
  font-size: 14px;
`;

const Title = styled.p`
  display: flex;
  padding: 20px 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Copyright = () => {
  return (
    <Container>
      <Title>© Copyright 2022 Etcart, LLC. All rights reserved. Developed by Cornerstone Technology.</Title>
    </Container>
  );
};

export default Copyright;
