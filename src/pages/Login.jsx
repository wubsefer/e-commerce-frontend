import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap = styled.div`
  width: 30%;
  padding: 20px;
  background-color: whitesmoke;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Link = styled.a`
  font-size: 12px;
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Login = () => {
  return (
    <Container>
      <Wrap>
        <Title>Login</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>Login</Button>
          <Link>Do not remember the password?</Link>
          <Link>Create New Account</Link>
        </Form>
      </Wrap>
    </Container>
  );
};

export default Login;
