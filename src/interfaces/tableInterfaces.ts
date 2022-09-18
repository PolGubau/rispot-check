export interface Sale {
  id: number;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  image: string;
  since: string;
  stars: number;
  category: string;
  valorations: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}
