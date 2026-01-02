
export interface Property {
  id: string;
  title: string;
  type: 'sale' | 'rent';
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
