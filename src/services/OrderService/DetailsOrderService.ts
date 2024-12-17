import prismaCliente from "../../../prisma/prisma";

interface OrderRequest {
  order_id: string;
}

class DetailsOrderService {
  async detailsOrder({ order_id }: OrderRequest) {

    const orderDetails = await prismaCliente.item.findMany({
      where: {
        order_id: order_id
      },
      include: {
        product: true,
        order: true,
      }
    });

    return orderDetails;
  }
}

export { DetailsOrderService }