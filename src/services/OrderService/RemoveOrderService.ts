import prismaCliente from "../../../prisma/prisma";

interface OrderRequest {
  order_id: string;
}

class RemoveOrderService {
  async removeOrder({ order_id }: OrderRequest) {
    try {
      const removeOrderId = await prismaCliente.order.delete({
        where: {
          id: order_id,
        }
      });

      return removeOrderId;
    } catch {

    }
  }
}

export { RemoveOrderService }