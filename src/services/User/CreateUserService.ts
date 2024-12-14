import prismaCliente from "../../../prisma/prisma";
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async createUser({ name, email, password }: UserRequest) {
    try {
      const userExistsEmail = await prismaCliente.user.findFirst({
        where: {
          email: email
        }
      });

      if (userExistsEmail) {
        throw new Error("User already exists");
      }

      if (!email || !password) {
        throw new Error("Email and password are required!");
      }

      const passwordHash = await hash(password, 8);

      const newUser = await prismaCliente.user.create({
        data: {
          name: name,
          email: email,
          password: passwordHash
        },
        select: {
          id: true,
          name: true,
          email: true
        }
      });

      return newUser;

    } catch (err) {
      throw new Error(`User creation failed: ${err.message}`);
    }
  }
}

export { CreateUserService };
