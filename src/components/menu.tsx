import { menu, submenu } from "../data/data"
import styled from "styled-components"
import { useState } from "react"
import GoldMenu from "./subMenu/gold"
import { EProductType } from "../data/dataType"
import Package from "./subMenu/package"


type MenuProps = {
  productIdx:number,
  productType:number
}

const Menu = ({productIdx,productType}:MenuProps) => {
  const [menuIdx,setMenuIdx] = useState(0)
  const [menuCategory,setMenuCategory] = useState("")

  const handleMouseEnter = (menuIdx:number,menuCategory:string) => {
    setMenuCategory(menuCategory)
    setMenuIdx(menuIdx)
  }
  const handleMouseLeave = () => {
    setMenuCategory("")
  }

  const displayIdx = productType !== EProductType.etc ? productIdx : 0;

  return(
    <MenuSection>
      <>
        <MenuNav>         
          <MenuTitle><a href={menu[displayIdx].link}>{menu[displayIdx].title}</a></MenuTitle> 
          {menu[displayIdx].menuCategory.map((item,menuIdx) => <MenuLi onMouseEnter={()=>handleMouseEnter(menuIdx,item.text)} onMouseLeave ={handleMouseLeave} isCategory = {menuCategory === item.text}><a href={item.link}>{item.text}</a></MenuLi>)}    
        </MenuNav>

        {/* {
          submenu.map(item =>{
            switch(productType){
              case EProductType.gold:
                return <GoldMenu productIdx = {productIdx} menuIdx = {menuIdx} />
              case EProductType.package:
                return <Package productIdx = {productIdx} menuCategory ={menuCategory}/> 
              case EProductType.airline && EProductType.etc :
              default:
                break;
            }
          })
        } */}
        
        {

      (() => {
        switch (productType) {
          case EProductType.gold:
            return <GoldMenu  productIdx = {productIdx} menuIdx = {menuIdx}/>
          case EProductType.package:
            return <Package   productIdx = {productIdx} menuCategory ={menuCategory}/>

          default:
            return null
        }
      })()}
        
      </>
    </MenuSection>
  )
}


export default Menu

const MenuSection = styled.section`
  width:93%;
  display: flex;
  flex-direction: column;
`

const MenuNav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
`

const MenuTitle = styled.p`
  margin-right: 40px;
  font-size:30px;
`

interface ISubCategoryProps {
  isCategory : boolean
}

const MenuLi = styled.li<ISubCategoryProps>`
  color:${props=>props.isCategory && `orange`};
  border-bottom: ${props => props.isCategory && `3px solid orange`};
  list-style: none;
  margin: 0 10px;
`