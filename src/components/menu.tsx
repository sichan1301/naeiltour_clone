import { menu } from "../data/data"
import styled from "styled-components"

type MenuProps = {
  idx:number
}

const Menu = ({idx}:MenuProps) => {

  return(
    <MenuNav>
      <MenuTitle><a href={menu[idx].link}>{menu[idx].title}</a></MenuTitle> 
      {menu[idx].menuCategory.map(item => <MenuLi><a href={item.link}>{item.text}</a></MenuLi>)}
    </MenuNav>
  )
}


export default Menu


const MenuNav = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  width:100%;
`

const MenuTitle = styled.p`
  margin: 0 40px;
`

const MenuLi = styled.li`
  list-style: none;
  margin: 0 10px;
`