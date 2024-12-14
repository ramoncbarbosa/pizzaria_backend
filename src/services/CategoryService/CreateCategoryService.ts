import prismaCliente from "../../../prisma/prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async createCategory({ name }: CategoryRequest) {
    try {
      const categoryExist = await prismaCliente.category.findFirst({
        where: {
          name: name,
        }
      });

      if (categoryExist) {
        throw new Error("Category already exists");
      }

      if (!name || name === "") {
        throw new Error("Name category are required!");
      }

      const newCategory = await prismaCliente.category.create({
        data: {
          name: name,
        }, select: {
          id: true,
          name: true,
          crated_at: true,
          update_at: true,
        }
      })

      return newCategory;

    } catch (err) {
      throw new Error(`Category creation failed: ${err.message}`);
    }

  }
}

export { CreateCategoryService }