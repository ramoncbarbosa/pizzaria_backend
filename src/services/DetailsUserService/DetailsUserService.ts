import prismaCliente from "../../../prisma/prisma";

class DetailsUserService {
  async details(user_id: string) {
    const user = await prismaCliente.user.findFirst({
      where: {
        id: user_id
      }, select: {
        id: true,
        name: true,
        email: true,
      }
    })

    return user;
  }
}

export { DetailsUserService }