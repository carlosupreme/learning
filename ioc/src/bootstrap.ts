import "reflect-metadata";
import { Container } from "inversify";
import { IResolver, Mediator, mediatorSettings } from "mediatr-ts";
import { UserRepository } from "./UserRepository";
import { InMemoryUserRepository } from "./InMemoryUserRepository";
import { InMemoryConfig } from "./InMemoryConfig";
import { UserService } from "./UserService";
import { types } from "./constants";

const container = new Container();

class InversifyResolver implements IResolver {
  resolve<T>(name: string): T {
    return container.get(name);
  }

  add(name: string, instance: Function): void {
    container.bind(name).to(instance as any);
  }

  remove(name: string): void {
    // not necessary- can be blank, never called by the lib, for debugging / testing only
    container.unbind(name);
  }

  clear(): void {
    // not necessary- can be blank, never called by the lib, for debugging / testing only
    container.unbindAll();
  }
}

mediatorSettings.resolver = new InversifyResolver();

export default function (): Container {
  container.bind(Mediator).toConstantValue(new Mediator());
  container.bind(types.InMemoryConfig).to(InMemoryConfig);
  container.bind(types.InMemoryUserRepository).to(InMemoryUserRepository);
  container
    .bind<UserRepository>(types.UserRepository)
    .to(InMemoryUserRepository);
  container.bind(types.UserService).to(UserService);

  return container;
}
