import { Request, Response} from "express";
import {SendOrderService} from "../../services/OrderService/SendOrderService";

class SendOrderController{
    async handle(req: Request, res: Response){
        const { order_id } = req.body;

        const sendOrder = new SendOrderService();
        const orderStatus = await sendOrder.sendOrder({
            order_id,
        });

        return res.json(orderStatus);
    }
}

export { SendOrderController }