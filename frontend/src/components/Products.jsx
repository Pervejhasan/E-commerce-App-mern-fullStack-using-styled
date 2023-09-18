import styled from "styled-components";
import { popularProduct } from "../data";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #cbdfdd95;
`;
const Products = () => {
  return (
    <Container>
      {popularProduct.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
