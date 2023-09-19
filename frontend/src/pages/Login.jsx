import styled from "styled-components";
import { mobile } from "../../responsive.js";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(107, 97, 97, 0.5)),
    url("../../public/images/register-4.avif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  ${mobile({ width: "75%" })};
  background-color: rgba(51, 50, 51, 0.844);
  border-radius: 5px;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  padding: 10px;
  color: white;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 0 auto;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: whitesmoke;
  font-weight: 500;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="" placeholder="username" />
          <Input type="" placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT REMEMBER THR PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
