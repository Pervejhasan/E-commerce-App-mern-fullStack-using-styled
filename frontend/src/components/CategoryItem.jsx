import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  background-color: rgba(255, 192, 203, 0.316);
  border-radius: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 30px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #534c4c;
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
