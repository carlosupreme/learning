import { inject, injectable } from "inversify";
import { InMemoryConfig } from "./InMemoryConfig";
import { User } from "./User";
import { UserRepository } from "./UserRepository";
import { types } from "./constants";

@injectable()
export class InMemoryUserRepository implements UserRepository {
  constructor(
    @inject(types.InMemoryConfig) private inMemoryConfig: InMemoryConfig
  ) {}

  findUserByName(name: string): Promise<User | undefined> {
    return this.inMemoryConfig.findUserByName(name);
  }
}
