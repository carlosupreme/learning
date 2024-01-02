import { IRequest } from "mediatr-ts";

export class GetUserQuery implements IRequest<string> {
  constructor(public name: string) {}
}
