/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DependentAddressService } from "../dependentAddress.service";
import { DependentAddressCreateInput } from "./DependentAddressCreateInput";
import { DependentAddress } from "./DependentAddress";
import { DependentAddressFindManyArgs } from "./DependentAddressFindManyArgs";
import { DependentAddressWhereUniqueInput } from "./DependentAddressWhereUniqueInput";
import { DependentAddressUpdateInput } from "./DependentAddressUpdateInput";

export class DependentAddressControllerBase {
  constructor(protected readonly service: DependentAddressService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DependentAddress })
  async createDependentAddress(
    @common.Body() data: DependentAddressCreateInput
  ): Promise<DependentAddress> {
    return await this.service.createDependentAddress({
      data: data,
      select: {
        city: true,
        complement: true,
        dependentsId: true,
        id: true,
        neighborhood: true,
        numberField: true,
        state: true,
        street: true,
        title: true,
        zip: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DependentAddress] })
  @ApiNestedQuery(DependentAddressFindManyArgs)
  async dependentAddresses(
    @common.Req() request: Request
  ): Promise<DependentAddress[]> {
    const args = plainToClass(DependentAddressFindManyArgs, request.query);
    return this.service.dependentAddresses({
      ...args,
      select: {
        city: true,
        complement: true,
        dependentsId: true,
        id: true,
        neighborhood: true,
        numberField: true,
        state: true,
        street: true,
        title: true,
        zip: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DependentAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dependentAddress(
    @common.Param() params: DependentAddressWhereUniqueInput
  ): Promise<DependentAddress | null> {
    const result = await this.service.dependentAddress({
      where: params,
      select: {
        city: true,
        complement: true,
        dependentsId: true,
        id: true,
        neighborhood: true,
        numberField: true,
        state: true,
        street: true,
        title: true,
        zip: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DependentAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDependentAddress(
    @common.Param() params: DependentAddressWhereUniqueInput,
    @common.Body() data: DependentAddressUpdateInput
  ): Promise<DependentAddress | null> {
    try {
      return await this.service.updateDependentAddress({
        where: params,
        data: data,
        select: {
          city: true,
          complement: true,
          dependentsId: true,
          id: true,
          neighborhood: true,
          numberField: true,
          state: true,
          street: true,
          title: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DependentAddress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDependentAddress(
    @common.Param() params: DependentAddressWhereUniqueInput
  ): Promise<DependentAddress | null> {
    try {
      return await this.service.deleteDependentAddress({
        where: params,
        select: {
          city: true,
          complement: true,
          dependentsId: true,
          id: true,
          neighborhood: true,
          numberField: true,
          state: true,
          street: true,
          title: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
