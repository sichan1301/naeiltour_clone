import styled from "styled-components";
import { menu, product } from './data/data';
import Menu from "./components/menu";
import './App.css';
import { useState } from "react";
import SubMenu from "./components/subMenu";

const App = () => {
  const [productIdx,setProductIdx] = useState(0)

  const handleMouseEnter = (productIdx:number) =>{
    productIdx < menu.length && setProductIdx(productIdx)
  }

  return ( 
    <AppSection>
      <CategoryDiv>
        {product.map((product,productIdx )=> <CategoryText onMouseEnter={() =>{handleMouseEnter(productIdx)}}><a href={product.link}>{product.text}</a></CategoryText>)}
      </CategoryDiv>
      <Menu idx = {productIdx}/>
      <SubMenu idx = {productIdx} />
    </AppSection>
  );
}

export default App;

const AppSection = styled.section`
  width:70%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CategoryDiv = styled.div`
  display: flex;
`

const CategoryText = styled.button`
  font-size:16px;
  margin:5px 10px;
  border:none;
  background:none;
`