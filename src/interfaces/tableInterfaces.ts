export interface Sale {
  id: number;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  image: string;
  since: string;
  category: number;
  valorations: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}
