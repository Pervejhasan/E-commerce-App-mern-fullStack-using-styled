import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";
import { mobile } from "../../responsive.js";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "40px" })}
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;
const InputContainer = styled.div`
  height: 40px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: " 80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  outline: none;
  padding: 15px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  color: #ffffff;
  background-color: teal;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
