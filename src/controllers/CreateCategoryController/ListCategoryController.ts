import { Request, Response } from "express";
import { ListCategoryService } from "../../services/CategoryService/ListCategoryService";

class ListCategoryController {
  async handle(req: Request, res: Response) {

    const listCategoryService = new ListCategoryService();

    const categoryList = await listCategoryService.ListCategory();

    return res.json(categoryList);
  }
}

export { ListCategoryController }