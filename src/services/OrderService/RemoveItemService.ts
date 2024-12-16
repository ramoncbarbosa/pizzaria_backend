import prismaCliente from "../../../prisma/prisma";

interface ItemRequest {
  item_id: string;
}

class RemoveItemService {
  async removeItem({ item_id }: ItemRequest) {

    const removeOrder = await prismaCliente.item.delete({
      where: {
        id: item_id,
      }
    });

    return removeOrder;
  }
}

export { RemoveItemService }