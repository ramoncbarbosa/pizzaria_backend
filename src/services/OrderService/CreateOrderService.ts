import prismaCliente from "../../../prisma/prisma";

interface OrderRequest {
  table: number;
  name: string;
}

class CreateOrderService {
  async createOrder({ table, name }: OrderRequest) {
    try {
      const orderCreate = await prismaCliente.order.create({
        data: {
          table: table,
          name: name,
        },
        select: {
          id: true,
          table: true,
          name: true,
          status: true,
          draft: true,
        }
      });

      if (!name || !table) {
        throw new Error("Precisa preencher os campos de nome e mesa!")
      }



      return orderCreate;
    } catch {
      throw new Error("bad request!")
    }
  }
}

export { CreateOrderService }