import { submenu } from "../../data/data"
import styled from "styled-components"

type subMenuProps = {
  productIdx:number,
  menuCategory:string
}

const Package = ({productIdx,menuCategory}:subMenuProps) => {
  console.log(productIdx)
  return(
    <PackageSection>
      {submenu[productIdx][0].map(item=>(<ul>
        <SubCategory isCategory = {menuCategory === item.subCategory.text}>{item.subCategory.text}</SubCategory>  
        {item.subMenu?.map(subMenu => <li><a href={subMenu.link}>{subMenu.text}</a></li>)}  
      </ul>))}
    </PackageSection>
  )
}

export default Package

const PackageSection = styled.section`
  display:flex;
`

const Title = styled.p`
  font-weight: 800;
`

interface ISubCategoryProps {
  isCategory : boolean
}

const SubCategory = styled.p<ISubCategoryProps>`
  width: 150px; 
  padding:5px;
  background-color: ${props=>props.isCategory ? `orange`:`none`};
  color:${props=>props.isCategory ? `#fff`:`orange`};
  font-size:16px;
  font-weight: 800;
`