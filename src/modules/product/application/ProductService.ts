import { CategoryValue } from "../domain/category.value";
import { ProductRepository } from "../domain/product.respository";
import { ProductValue } from "../domain/product.value";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async searchProducts(query: string) {
    const items: ProductValue[] = [];
    let categories: CategoryValue[] = [];
    const res = await this.productRepository.searchProducts(query);

    if (!res) throw new Error("Product not found");

    if (res.data && res.data?.results && res.data.results?.length) {
      // recorrer cada item encontrado para generar solo 4 con la información personalizada
      res.data.results.map((product: any, index: number) => {
        if (index < 4) {
          const valueProduct = new ProductValue({
            id: product.id,
            title: product.title,
            price: {
              currency: product.currency_id,
              amount: product.price,
              decimals: 0,
            },
            picture: product.thumbnail,
            condition: product.condition,
            free_shipping: product.shipping.free_shipping,
            city_name: product?.address.city_name,
          });
          // adicionar item personalizado al array de items
          items.push(valueProduct);
        }
      });

      // extraer las categorias de la respuesta y armar el listado

      if (res.data.filters[0]?.values[0]?.path_from_root?.length) {
        categories = this.extractCategories(
          res.data.filters[0].values[0].path_from_root
        );
      }
    }

    const response = {
      author: {
        name: "Diego",
        lastname: "Gallardo",
      },
      categories,
      items,
    };

    return response;
  }

  public async findProduct(id: string) {
    const product = await this.productRepository.findProduct(id);
    if (!product) throw new Error("Product not found");

    const item = new ProductValue({
      id: product.data.id,
      title: product.data.title,
      price: {
        currency: product.data.currency_id,
        amount: product.data.price,
        decimals: 0,
      },
      picture: product.data?.pictures[0]?.url,
      condition: product.data.condition,
      free_shipping: product.data.shipping.free_shipping,
      sold_quantity: product.data.sold_quantity,
      description: await this.getDescription(product.data.id),
    });

    const response = {
      item,
      categories: await this.getCatergories(product.data.category_id),
    };

    return response;
  }

  public extractCategories = (data: any) => {
    const categories: CategoryValue[] = [];
    // recorrer la ruta con los elementos y adicionar cada nombre en el arreglo
    data.forEach((element) => {
      const category = new CategoryValue({
        name: element.name,
      });
      categories.push(category);
    });
    return categories;
  };

  public getCatergories = async (id: string): Promise<any> => {
    const result = await this.productRepository.getCatergories(id);
    if (result) return result.data.path_from_root as CategoryValue[];
    return [];
  };

  public getDescription = async (id: string): Promise<any> => {
    const result = await this.productRepository.getDescription(id);
    console.log(result.data.plain_text)
    if (result) return result.data.plain_text;
    return null;
  };
}
