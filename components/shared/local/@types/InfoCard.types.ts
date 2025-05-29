export interface PropertiesData {
  name: string;
  title: string;
  totalProperties: number;
  occupiedProperties: number;
  color: string;
}

export type InfoCardProps = {
  data: PropertiesData[];
}
