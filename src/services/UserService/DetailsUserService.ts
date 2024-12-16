import prismaCliente from "../../../prisma/prisma";

class DetailsUserService {
  async details(user_id: string) {
    try {
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
    } catch (err) {

    }
  }
}

export { DetailsUserService }