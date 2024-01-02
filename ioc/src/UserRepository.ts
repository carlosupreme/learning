import { User } from "./User";

export interface UserRepository {
  findUserByName(name: string): Promise<User | undefined>;
}
