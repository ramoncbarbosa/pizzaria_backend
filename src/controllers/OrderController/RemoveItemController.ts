import { Request, Response } from "express";
import { RemoveItemService } from "../../services/OrderService/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const item_id = req.query.item_id as string;

    const removeItemService = new RemoveItemService();

    const item = await removeItemService.removeItem({
      item_id
    });

    return res.json(item);

  }
}

export { RemoveItemController }