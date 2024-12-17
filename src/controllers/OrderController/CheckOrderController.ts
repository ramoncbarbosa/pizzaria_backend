import { Request, Response } from "express"
import { CheckOrderService } from "../../services/OrderService/CheckOrderService"

class CheckOrderController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const orderFish = new CheckOrderService();
    const checkOrder = await orderFish.checkOrder({
      order_id
    });

    return res.json(checkOrder);
  }
}

export { CheckOrderController }