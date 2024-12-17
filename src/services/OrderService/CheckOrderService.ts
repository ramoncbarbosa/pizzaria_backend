import prismaCliente from "../../../prisma/prisma";

interface OrderRequest {
  order_id: string;
}

class CheckOrderService {
  async checkOrder({ order_id }: OrderRequest) {
    const order = await prismaCliente.order.update({
      where: {
        id: order_id
      },
      data: {
        status: true,
      }
    });

    return order;
  }
}

export { CheckOrderService }