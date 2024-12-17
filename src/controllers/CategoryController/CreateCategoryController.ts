import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/CategoryService/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.createCategory({
      name,
    });

    return res.json(category)
  }
}

export { CreateCategoryController }