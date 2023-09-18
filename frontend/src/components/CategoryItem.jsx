import styled from "styled-components";
import { mobile } from "../../responsive.js";
const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  background-color: rgba(237, 156, 227, 0.316);
  border-radius: 8px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: contain;
  ${mobile({
    height: "60vh",
  })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: pink;
  opacity: 0.5; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.632);
  border-radius: 5px;
  padding: 10px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #5f5e5e;
  color: #bdbbbb;
  font-weight: 700;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  const { image, title } = item;

  return (
    <Container>
      <Image src={`../../public/images/${image}`} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
