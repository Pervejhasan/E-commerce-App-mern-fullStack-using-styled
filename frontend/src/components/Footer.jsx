import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive.js";
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ textAlign: "center", padding: "10px" })}
`;
const Logo = styled.h2``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  ${mobile({ justifyContent: "center" })}
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
  ${mobile({
    textAlign: "center",
  })}
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexDirection: "column",
  })}
  cursor: pointer;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  transition: all 0.5s ease;
  ${mobile({
    textAlign: "center",
    width: "100%",
  })}
  &:hover {
    color: #f72f2f;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#eee" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
`;
const Payment = styled.img`
  width: 50%;
  cursor: pointer;
  ${mobile({ width: "100%" })}
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RICHMAN</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aut et aliquam totam cupiditate placeat voluptatibus quam facere porro
          ex ipsam nam neque consectetur at hic, veritatis doloremque quos
          dolorem nulla vero repudiandae? Optio temporibus enim ut inventore
          dolores, veniam nulla et ex eaque quia magnam ullam recusandae rerum
          natus praesentium obcaecati.
        </Description>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: "10px", color: "blue" }} />
          West Rajabajar Dhaka, 1215
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{ marginRight: "10px", color: "green" }} />
          +880 187 6489694
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px", color: "red" }} />
          richman@gmail.com
        </ContactItem>
        <Payment src="../../public/images/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
