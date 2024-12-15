import prismaCliente from "../../../prisma/prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async signin({ email, password }: AuthRequest) {
    try {
      const user = await prismaCliente.user.findFirst({
        where: {
          email: email
        }
      })

      if (!user) {
        throw new Error("User/password incorrect!");
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("User/password incorrect!");
      }

      const token = sign(
        {
          name: user.name,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          subject: user.id,
          expiresIn: "30d",
        }
      )


      return {
        user: user.id,
        name: user.name,
        email: user.email,
        token: token
      }
    } catch (err) {
      throw new Error(`Authentication failed!`);
    }
  }
}

export { AuthUserService }