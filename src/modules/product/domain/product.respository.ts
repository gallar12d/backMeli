export interface ProductRepository {
  findProduct(id: string): Promise<any | null>;
  searchProducts(query: string): Promise<any | null>;
  getCatergories(id: string): Promise<any | null>;
  getDescription(id: string): Promise<any | null>;
}
