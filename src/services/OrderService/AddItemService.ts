import prismaCliente from "../../../prisma/prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

class AddItemService {
  async addItem({ order_id, product_id, amount }: ItemRequest) {
    try {
      const order = await prismaCliente.item.create({
        data: {
          order_id: order_id,
          product_id: product_id,
          amount: amount,
        }
      });

      return order;
    } catch {

    }
  }
}

export { AddItemService }