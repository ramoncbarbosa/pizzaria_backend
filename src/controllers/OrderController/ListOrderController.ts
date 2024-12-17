import { Request, Response } from "express";
import { ListOrderService } from "../../services/OrderService/ListOrderService";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const orderList = new ListOrderService();

    const orders = await orderList.listOrders();

    return res.json(orders);
  }
}

export { ListOrderController }