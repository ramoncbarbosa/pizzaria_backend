import { Request, Response } from "express";
import { AddItemService } from "../../services/OrderService/AddItemService";

class AddItemController {
  async handle(req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body;

    const addItemService = new AddItemService();
    const addItem = await addItemService.addItem({
      order_id,
      product_id,
      amount
    });

    return res.json(addItem);
  }
}

export { AddItemController }