import { ProductEntity } from "./product.entity";

export class ProductValue implements ProductEntity {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  city_name: string;
  sold_quantity: number;
  description: string;
  constructor({
    id,
    title,
    price,
    picture,
    condition,
    free_shipping,
    city_name,
    sold_quantity,
    description,
  }: {
    id: string;
    title: string;
    price: { currency: string; amount: number; decimals: number };
    picture: string;
    condition: string;
    free_shipping: boolean;
    city_name?: string;
    sold_quantity?: number;
    description?: string;
  }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.city_name = city_name ? city_name : "";
    this.sold_quantity = sold_quantity ? sold_quantity : 0;
    this.description = description ? description : "";
  }
}
