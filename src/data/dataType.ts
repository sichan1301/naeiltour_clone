type textLinkType ={
  text:string,
  link:string
}

export type productType = {
    text:string,
    link:string
    type?:string
  }

export type menuType = {
  title:string,
  link:string,
  menuCategory:textLinkType[]
}

export type subMenuType = {
  title?:string,
  link?:string,
  menu:{
    subCategory:{
      text:string,
      link?:string
    },
    subMenu?:{
      text:string,
      link:string
    }[],
    advertisement?:{
      text:string,
      link?:string
    }
  }[]
}[]
