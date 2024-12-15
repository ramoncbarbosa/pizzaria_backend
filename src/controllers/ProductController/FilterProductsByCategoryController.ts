import { Request, Response } from "express";
import { FilterProductsByCategoryService } from "../../services/ProductService/FilterProductsByCategoryService";
FilterProductsByCategoryService

class FilterProductsByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.body.category_id as string;

    const filterByCategoryService = new FilterProductsByCategoryService();
    const produtcs = await filterByCategoryService.FilterCategory({
      category_id
    })

    return res.json(produtcs);
  }
}

export { FilterProductsByCategoryController }