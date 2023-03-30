import { menu, submenu } from "../../data/data"
import styled from "styled-components"
import { textLinkType } from "../../data/dataType"

type subMenuProps = {
  productIdx:number,
  menuIdx:number
}

const Package = ({productIdx,menuIdx}:subMenuProps) => {
  console.log(productIdx)
  return(
    <>
      {submenu[productIdx][0].map(item=>(<ul>
        <SubCategory>{item.subCategory.text}</SubCategory>
        {item.subMenu?.map(subMenu => <li>{subMenu.text}</li>)}  
      </ul>))}
    </>
  )
}



export default Package


const Title = styled.p`
  font-weight: 800;
`

const SubCategory = styled.p`
  font-size:16px;
  font-weight: 800;
  color:orange;
`