import styled from "styled-components";
import { menu, product } from './data/data';
import Menu from "./components/menu";
import './App.css';
import { useState } from "react";

const App = () => {
  const [productIdx,setProductIdx] = useState(0)
  const [productType, setProductType] = useState(0)

  const handleMouseEnter = (productIdx:number,productType:number) =>{
    productIdx < 7 && setProductIdx(productIdx)
    setProductType(productType)
  }

  return ( 
    <AppSection>
      <CategoryDiv>
        {product.map((product,productIdx )=> <CategoryText onMouseEnter={() =>{handleMouseEnter(productIdx,product.type)}}><a href={product.link}>{product.text}</a></CategoryText>)}
      </CategoryDiv>
      <Menu productIdx = {productIdx} productType ={productType}/>
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  width:90%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CategoryDiv = styled.div`
  display: flex;
`

const CategoryText = styled.button`
  font-size:20px;
  margin:5px 10px;
  border:none;
  background:none;
`