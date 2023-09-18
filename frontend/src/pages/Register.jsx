import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(107, 97, 97, 0.5)),
    url("../../public/images/register-3.avif");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: rgba(255, 253, 255, 0.779);
  border-radius: 5px;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  padding: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 3px;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
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
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="" placeholder="first name" />
          <Input type="" placeholder="last name" />
          <Input type="" placeholder="email" />
          <Input type="" placeholder="username" />
          <Input type="" placeholder="password" />
          <Input type="" placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
