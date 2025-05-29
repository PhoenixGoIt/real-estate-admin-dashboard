export type PropertyItem = {
  name: string;
  price: number;
  image: string;
  location: string;
}

export type PropertyFrameProps = {
  data: PropertyItem[];
}