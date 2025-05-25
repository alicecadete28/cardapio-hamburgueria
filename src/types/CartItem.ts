import { Product } from "./Product";

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  customizations: {
    removedIngredients: string[]; // IDs dos ingredientes removidos
  };
}
