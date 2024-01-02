import { injectable } from "inversify";
import { User } from "./User";

@injectable() 
export class InMemoryConfig {
  _users: User[];

  constructor() {
    this._users = [new User("John")];
  }

  addUser(user: User) {
    this._users.push(user);
  }

  findUserByName(name: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      const user = this._users.find((user) => user.name === name);
      if (user === undefined) {
        reject(new Error("No existe el usuario"));
      }
      resolve(user);
    });
  }
}
