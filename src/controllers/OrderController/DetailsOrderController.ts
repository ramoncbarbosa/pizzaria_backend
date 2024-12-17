import { Request, Response } from "express"
import { DetailsOrderService } from "../../services/OrderService/DetailsOrderService";
DetailsOrderService

class DetailsOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const detailsOrder = new DetailsOrderService();
    const orders = await detailsOrder.detailsOrder({
      order_id
    });

    return res.json(orders);
  }
}

export { DetailsOrderController }