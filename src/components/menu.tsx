import { menu, submenu } from "../data/data"
import styled from "styled-components"
import { useState } from "react"
import GoldMenu from "./subMenu/gold"
import { EMenuType, EProductType } from "../data/dataType"
import Package from "./subMenu/package"


type MenuProps = {
  productIdx:number,
  productType:number
}

const Menu = ({productIdx,productType}:MenuProps) => {
  const [menuIdx,setMenuIdx] = useState(0)

  const handleMouseEnter = (menuIdx:number) => {
    menuIdx < 3 && setMenuIdx(menuIdx)
  }

  return(
    <MenuSection>
      <>
        <MenuNav>
          <MenuTitle><a href={menu[productIdx].link}>{menu[productIdx].title}</a></MenuTitle> 
          {menu[productIdx].menuCategory.map((item,menuIdx) => <MenuLi onMouseEnter={()=>handleMouseEnter(menuIdx)}><a href={item.link}>{item.text}</a></MenuLi>)}
        </MenuNav>


        {
          submenu.map(item =>{
            switch(productType){
              case EProductType.gold:
                return <GoldMenu productIdx = {productIdx} menuIdx = {menuIdx} />
              case EProductType.package:
                return <Package productIdx = {productIdx} menuIdx = {menuIdx}/>
              default:
                break;
            }
          })
        }
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

const MenuLi = styled.li`
  list-style: none;
  margin: 0 10px;
`