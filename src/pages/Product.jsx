import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 0.8;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
  padding-bottom: 20px;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  padding: 20px 0px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;


const FilterSizes = styled.div`
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  margin: 2px;
`;

//const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 0px 10px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: gray;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  color: white;

  &:hover {
    background-color: whitesmoke;
    color: black;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/vd6mJN1/Fashion-sport-sneaker-in-red-and-blue-colors-on-white-background-realistic-vector-illustration.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Nike Men Shoes</Title>
          <Price>$567</Price>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Desc>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Hr />
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSizes>XL</FilterSizes>
              <FilterSizes>S</FilterSizes>
              <FilterSizes>M</FilterSizes>
              <FilterSizes>L</FilterSizes>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
