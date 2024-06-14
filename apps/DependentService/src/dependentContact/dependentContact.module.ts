import { Module } from "@nestjs/common";
import { DependentContactModuleBase } from "./base/dependentContact.module.base";
import { DependentContactService } from "./dependentContact.service";
import { DependentContactController } from "./dependentContact.controller";
import { DependentContactResolver } from "./dependentContact.resolver";

@Module({
  imports: [DependentContactModuleBase],
  controllers: [DependentContactController],
  providers: [DependentContactService, DependentContactResolver],
  exports: [DependentContactService],
})
export class DependentContactModule {}
