import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive"

//Style components
const Container = styled.div`
  height: 65px;
  background-color: teal;
  ${mobile({heigt: "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  color: white;
`;
const SearchContainer = styled.div`
  //border: 0.5px solid lightgray;
  border: 1px solid transparent;
  border-radius: 0;
  width: 360px;
  height: 30px;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  justify-content: space-between;
  padding-left: 5px;
  transition: all 0.3s ease;
  position: relative;
`;
const Input = styled.input`
  border: none;
  padding-left: 48px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: teal;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  padding-left: 20px;
  color: white;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 24px;
  padding-right: 20px;
  color: white;
`;

//Navbar Component
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>ET-commerce</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlined />
          </SearchContainer>
        </Center>
        <Right>
          <Language>EN</Language>
          <MenuItem>Regsiter</MenuItem>
          <MenuItem>Signin</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
