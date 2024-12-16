import { Request, Response } from "express";
import { RemoveOrderService } from "../../services/OrderService/RemoveOrderService";
import prismaCliente from "../../../prisma/prisma";

class RemoveOrderController {
  async handle(req: Request, res: Response) {

    const order_id = req.query.order_id as string;

    const removerOrderService = new RemoveOrderService();

    const removeOrder = await removerOrderService.removeOrder({
      order_id
    });

    return res.json(removeOrder);
  }
}

export { RemoveOrderController }