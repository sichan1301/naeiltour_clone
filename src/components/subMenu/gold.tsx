import { menu, submenu } from "../../data/data"
import styled from "styled-components"

type subMenuProps = {
  productIdx:number,
  menuIdx:number
}

const GoldMenu = ({productIdx,menuIdx}:subMenuProps) => {
  return(
    <GoldMenuSection>
      
      {submenu[productIdx][menuIdx].map(item => (<ul>
        <SubCategory>{item.subCategory.text}</SubCategory>
        {item.subMenu?.map(subMenu => <li>{subMenu.text}</li>)}
      </ul>))}   
    </GoldMenuSection>
  )
}



export default GoldMenu

const GoldMenuSection = styled.section`

`

const Title = styled.p`
  font-weight: 800;
`

const SubCategory = styled.p`
  font-size:16px;
  font-weight: 800;
  color:orange;
`