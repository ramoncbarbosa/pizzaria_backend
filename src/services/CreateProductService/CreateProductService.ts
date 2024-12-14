import prismaCliente from "../../../prisma/prisma";

interface ProductRequest {
  name: string;
  price: string;
  description: string;
  banner?: string;
  category_id: string;
}

class CreateProductService {
  async createProduct({ name, price, description, banner, category_id }: ProductRequest) {
    try {
      const product = await prismaCliente.product.create({
        data: {
          name: name,
          price: price,
          description: description,
          banner: banner,
          category_id: category_id,
        }
      });

      return product;

    } catch (err) {
      throw new Error("error!")
    }
  }
}

export { CreateProductService }