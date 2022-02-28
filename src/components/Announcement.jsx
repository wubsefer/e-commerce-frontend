import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background: whitesmoke;
    height: 30px;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500px;
    font-size: 16px;
`;

const Announcement = () => {
  return (
  <Container>
      Today you have free shopping delivary. Today you have free shopping delivary. 
  </Container>
    );
};

export default Announcement;
