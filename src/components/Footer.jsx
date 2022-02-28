import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  LocationOnOutlined,
  CallOutlined,
  AlternateEmailOutlined,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SocialMediaContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Logo = styled.h1`
  font-weight: 700;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ET-Commerce.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam incididunt ut labore et dolore magna aliqua. Ut enim.
        </Desc>
        <SocialMediaContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialMediaContainer>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Womens Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Terms & Condition</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <LocationOnOutlined style={{ marginRight: "10px" }} />
          Pushkin Sqaure, Sarbet, Addis Ababa
        </ContactItem>
        <ContactItem>
          <CallOutlined style={{ marginRight: "10px" }} />
          +251 922449047
        </ContactItem>
        <ContactItem>
          <AlternateEmailOutlined style={{ marginRight: "10px" }} />
          contact@etcart.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
