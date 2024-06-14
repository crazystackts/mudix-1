import { Module } from "@nestjs/common";
import { ContactAuthorizationModuleBase } from "./base/contactAuthorization.module.base";
import { ContactAuthorizationService } from "./contactAuthorization.service";
import { ContactAuthorizationController } from "./contactAuthorization.controller";
import { ContactAuthorizationResolver } from "./contactAuthorization.resolver";

@Module({
  imports: [ContactAuthorizationModuleBase],
  controllers: [ContactAuthorizationController],
  providers: [ContactAuthorizationService, ContactAuthorizationResolver],
  exports: [ContactAuthorizationService],
})
export class ContactAuthorizationModule {}
