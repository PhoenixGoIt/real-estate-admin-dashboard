export interface propertyListItem {
    id: number,
    square: number,
    amountBed: number,
    title: string, 
    price: number,
    mainImage: string, 
    location: string,
    views: number,
    images: string[],
    description: string,
    facillity: { [key: string]: boolean }
}

export interface PropertyCardItem {
    id: number,
    square: number,
    amountBed: number,
    title: string, 
    price: number,
    mainImage: string, 
    location: string,
  }
  
export interface PropertyCardProps {
    data: PropertyCardItem
    opt?: string,
  }
  