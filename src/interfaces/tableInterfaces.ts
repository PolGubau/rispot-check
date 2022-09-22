export interface SaleInterface {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  image: string;
  since: string;
  stars: number;
  category: string | number;
  valorations: number;
  link: string;
}

export interface CategoryInterface {
  id: number;
  name: string;
  description: string;
  image: string;
}
