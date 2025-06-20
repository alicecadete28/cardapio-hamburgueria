export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients: {
    id: string;
    name: string;
    removable: boolean;
    removed: boolean;
  }[];
  customizations?: {
    removedIngredients: string[];
  };
}
