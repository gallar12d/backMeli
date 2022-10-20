import { Router } from "express";
import { router as productRoutes } from "../../modules/product/infrastructure/route/product.route";


const router = Router();


router.use(productRoutes);


export { router };
