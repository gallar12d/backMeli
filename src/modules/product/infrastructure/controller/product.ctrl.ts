import { Request, Response } from "express";
import getErrorMessage from "../../../../infrastructure/utils/handleErrors";
import { ProductService } from "../../application/ProductService";
interface Query {
  q: string;
}
export class ProductController {
  constructor(private productService: ProductService) {}

  public findProduct = async (req: Request, res: Response) => {
    try {
      const product = await this.productService.findProduct(req.params.id);
      res.status(200).send(product);
    } catch (err) {
      res.status(400).send(getErrorMessage(err));
    }
  };

  public searchProducts = async (req: Request, res: Response) => {
    try {
      const { q } = req.query as unknown as Query;

      const products = await this.productService.searchProducts(q);
      res.send(products);
    } catch (error) {
      res.status(401).send(getErrorMessage(error));
    }
  };
}
