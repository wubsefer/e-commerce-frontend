import { SendOutlined } from "@material-ui/icons"
import styled from "styled-components"



const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 37%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 4;
    padding: 20px;
    font-size: 19px;
`
const Button = styled.button`
    flex: 2;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Get Notified by Newsletter</Title>
        <Desc>
            Get timely updates from your fevorite products.
        </Desc>
        <InputContainer>
            <Input placeholder="Your Email" />
            <Button>
                <SendOutlined />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter