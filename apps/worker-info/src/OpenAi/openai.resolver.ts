import * as graphql from "@nestjs/graphql";
import { Gpt3Input } from "../openAi/Gpt3Input";
import { Gpt3Output } from "../openAi/Gpt3Output";
import { OpenAiService } from "./openai.service";

export class OpenAiResolver {
  constructor(protected readonly service: OpenAiService) {}

  @graphql.Mutation(() => Gpt3Output)
  async GenerateText(
    @graphql.Args()
    args: Gpt3Input
  ): Promise<Gpt3Output> {
    return this.service.GenerateText(args);
  }
}
