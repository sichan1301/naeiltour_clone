export type textLinkType ={
  text:string,
  link:string
}

export type productType = {
    type:EProductType,
    text:string,
    link:string
  }

export type menuType = {
  title:string,
  link:string,
  menuCategory:textLinkType[]
}





export type subMenuType = [
  [
    {
      subCategory:{
        text:string,
        link?:string
      },
      subMenu?:textLinkType[],
      advertisement?:{
        text:string,
        link?:string
      },
    }[]
  ][]
]



export enum EProductType {
  gold,
  package,
  information
}
