import { inject, injectable } from "inversify";
import { User } from "./User";
import { UserRepository } from "./UserRepository";
import { types } from "./constants";

@injectable()
export class UserService {
  constructor(
    @inject(types.UserRepository) private userRepository: UserRepository
  ) {}

  async findUserByName(name: string): Promise<string> {
    const user = await this.userRepository.findUserByName(name);

    if (user instanceof User) return user.name;

    return "There is no user";
  }
}
