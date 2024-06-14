import { Module } from "@nestjs/common";
import { DependentContactAuthorizationModuleBase } from "./base/dependentContactAuthorization.module.base";
import { DependentContactAuthorizationService } from "./dependentContactAuthorization.service";
import { DependentContactAuthorizationController } from "./dependentContactAuthorization.controller";
import { DependentContactAuthorizationResolver } from "./dependentContactAuthorization.resolver";

@Module({
  imports: [DependentContactAuthorizationModuleBase],
  controllers: [DependentContactAuthorizationController],
  providers: [
    DependentContactAuthorizationService,
    DependentContactAuthorizationResolver,
  ],
  exports: [DependentContactAuthorizationService],
})
export class DependentContactAuthorizationModule {}
