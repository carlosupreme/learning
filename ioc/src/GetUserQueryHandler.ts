import { IRequestHandler, requestHandler } from "mediatr-ts";
import { UserService } from "./UserService";
import { GetUserQuery } from "./GetUserQuery";
import { inject, injectable } from "inversify";
import { types } from "./constants";

@requestHandler(GetUserQuery)
@injectable()
export class GetUserQueryHandler
  implements IRequestHandler<GetUserQuery, string>
{
  constructor(@inject(types.UserService) private userService: UserService) {}

  handle = async (value: GetUserQuery): Promise<string>  => {
    return await this.userService.findUserByName(value.name);
  }
}
