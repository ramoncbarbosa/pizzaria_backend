import { Request, Response } from "express";
import { FilterByCategoryService } from "../../services/ProductService/FilterByCategoryService";

class FilterByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.body.category_id as string;

    const filterByCategoryService = new FilterByCategoryService();
    const produtcs = await filterByCategoryService.FilterCategory({
      category_id
    })

    return res.json(produtcs);
  }
}

export { FilterByCategoryController }