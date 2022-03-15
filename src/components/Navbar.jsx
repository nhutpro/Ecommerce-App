import { MailOutline, Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Lagnuage = styled.span`
  font-size: large;
`;
const Input = styled.input`
  border: none;
  cursor: pointer;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  width: 33.3333333333%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-right: 25px;
`;
const Center = styled.div`
  flex: 2;
  width: 33.3333333333%;
`;
const Right = styled.div`
  flex: 1;
  width: 33.3333333333%;
  display: flex;
  justify-content: space-around;
`;
const SearchContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  margin-left: 5px;
`;

const Logo = styled.h2`
  font-weight: bold;
  margin: 0;
  text-align: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`;
const Navbar = () => {
  return (
    <Container className="Container">
      <Wrapper>
        <Left>
          <Lagnuage>EN</Lagnuage>
          <SearchContainer>
            <Input></Input>
            <Search style={{ color: "red", fontSize: "24px" }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>

        <Right>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
