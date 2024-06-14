import { Injectable } from "@nestjs/common";
import { Gpt3Input } from "../openAi/Gpt3Input";
import { Gpt3Output } from "../openAi/Gpt3Output";

@Injectable()
export class OpenAiService {
  constructor() {}
  async GenerateText(args: Gpt3Input): Promise<Gpt3Output> {
    throw new Error("Not implemented");
  }
}
