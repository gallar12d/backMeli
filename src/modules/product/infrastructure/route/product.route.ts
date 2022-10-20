import { Router } from "express";
import { ProductService } from "../../application/ProductService";
import { ProductController } from "../controller/product.ctrl";
import { MeliRepository } from "../repository/meli.repository";

const router = Router();

const meliRepository = new MeliRepository();
const productService = new ProductService(meliRepository);
const productCtrl = new ProductController(productService);

router.get(`/items`,  productCtrl.searchProducts);
router.get(`/items/:id`,  productCtrl.findProduct);




export { router };
