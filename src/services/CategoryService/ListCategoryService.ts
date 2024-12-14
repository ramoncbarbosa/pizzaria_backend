import prismaCliente from "../../../prisma/prisma";

class ListCategoryService {
  async ListCategory() {
    try {
      const categoryExist = await prismaCliente.category.findMany({
        select: {
          id: true,
          name: true,
        }
      });

      return categoryExist;

    } catch (err) {
      throw new Error(`Error ao listar categorias: ${err.message}`);
    }
  }
}

export { ListCategoryService }