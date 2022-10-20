import { ProductRepository } from "../../domain/product.respository";
import axios from "axios";

// import OrderModel from "../model/order.schema";

export class MeliRepository implements ProductRepository {
  public async findProduct(id: string): Promise<any | null> {
    try {
      const url = `https://api.mercadolibre.com/items/${id}`;
      const res = await axios.get(url);
      return res;
    } catch (error) {
      return null;
    }
  }

  public async searchProducts(query: string): Promise<any | null> {
    try {
      const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
      const res = await axios.get(url);
      return res;
    } catch (error) {
      return null;
    }
  }
  public async getCatergories(id: string): Promise<any> {
    try {
      const url = `https://api.mercadolibre.com/categories/${id}/`;
      const res = await axios.get(url);
      return res;
    } catch (error) {
      return null;
    }
  }
  public async getDescription(id: string): Promise<any> {
    try {
      const url = `https://api.mercadolibre.com/items/${id}/description`;
      const res = await axios.get(url);
      return res;
    } catch (error) {
      return null;
    }
  }
}
