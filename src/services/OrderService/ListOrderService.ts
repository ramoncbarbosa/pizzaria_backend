import prismaCliente from "../../../prisma/prisma";

class ListOrderService {
  async listOrders() {
    const orders = await prismaCliente.order.findMany({
      where: {
        draft: false,
        status: false,
      },
      orderBy: {
        created_at: "desc",
      }
    });

    return orders;
  }
}

export { ListOrderService }