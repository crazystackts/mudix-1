import { Module } from "@nestjs/common";
import { OpenAiService } from "./openai.service";
import { OpenAiController } from "./openai.controller";
import { OpenAiResolver } from "./openai.resolver";

@Module({
  controllers: [OpenAiController],
  providers: [OpenAiService, OpenAiResolver],
  exports: [OpenAiService],
})
export class OpenAiModule {}
