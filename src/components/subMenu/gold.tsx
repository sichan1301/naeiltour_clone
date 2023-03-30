import { menu, submenu } from "../../data/data"
import styled from "styled-components"
import { EMenuType, textLinkType } from "../../data/dataType"

type subMenuProps = {
  productIdx:number,
  menuIdx:number
}

const GoldMenu = ({productIdx,menuIdx}:subMenuProps) => {
const filteredData = submenu.filter(item => item.type === EMenuType.gold)

  return(
    <GoldMenuSection>
      
      {/* submenu[productIdx][menuIdx]  요딴식으로 하나 만들 것  */}
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