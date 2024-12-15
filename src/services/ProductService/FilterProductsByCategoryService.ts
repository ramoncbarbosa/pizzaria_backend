import prismaCliente from "../../../prisma/prisma";

interface ProductRequest {
  category_id: string;
}

class FilterProductsByCategoryService {
  async FilterCategory({ category_id }: ProductRequest) {
    try {
      const filterByCategoy = await prismaCliente.product.findMany({
        where: {
          category_id: category_id
        }
      });

      return filterByCategoy;

    } catch (err) {

    }

  }
}

export {
  FilterProductsByCategoryService
}

