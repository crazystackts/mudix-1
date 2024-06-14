import { Module } from "@nestjs/common";
import { DependentAddressModuleBase } from "./base/dependentAddress.module.base";
import { DependentAddressService } from "./dependentAddress.service";
import { DependentAddressController } from "./dependentAddress.controller";
import { DependentAddressResolver } from "./dependentAddress.resolver";

@Module({
  imports: [DependentAddressModuleBase],
  controllers: [DependentAddressController],
  providers: [DependentAddressService, DependentAddressResolver],
  exports: [DependentAddressService],
})
export class DependentAddressModule {}
