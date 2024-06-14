import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OpenAiService } from "./openai.service";
import { Gpt3Input } from "../openAi/Gpt3Input";
import { Gpt3Output } from "../openAi/Gpt3Output";

@swagger.ApiTags("openAis")
@common.Controller("openAis")
export class OpenAiController {
  constructor(protected readonly service: OpenAiService) {}

  @common.Post("/generate-text")
  @swagger.ApiOkResponse({
    type: Gpt3Output
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateText(
    @common.Body()
    body: Gpt3Input
  ): Promise<Gpt3Output> {
        return this.service.GenerateText(body);
      }
}
