import {
  controller,
  httpGet,
  request,
  response,
} from "inversify-express-utils";
import { Request, Response } from "express";
import {Mediator } from "mediatr-ts";
import { GetUserQuery } from "./GetUserQuery";

@controller("/user")
export class UserController {
  constructor(private mediator: Mediator) {}

  @httpGet("/:name")
  async findUserByName(@request() req: Request, @response() res: Response) {
    const { name } = req.params;
    const query = new GetUserQuery(name);
    const user = await this.mediator.send<string>(query);
    
    res.send(user);
  }
}
