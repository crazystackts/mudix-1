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
import { HolderService } from "../holder.service";
import { HolderCreateInput } from "./HolderCreateInput";
import { Holder } from "./Holder";
import { HolderFindManyArgs } from "./HolderFindManyArgs";
import { HolderWhereUniqueInput } from "./HolderWhereUniqueInput";
import { HolderUpdateInput } from "./HolderUpdateInput";

export class HolderControllerBase {
  constructor(protected readonly service: HolderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Holder })
  async createHolder(@common.Body() data: HolderCreateInput): Promise<Holder> {
    return await this.service.createHolder({
      data: data,
      select: {
        addresses: true,
        affectionateFirstName: true,
        affectionateGender: true,
        affectionateLastName: true,
        attachments: true,
        birthDate: true,
        contactAuthorizationId: true,
        contacts: true,
        documents: true,
        editedFields: true,
        education: true,
        filial: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        maritalStatus: true,
        password: true,
        phones: true,
        requestId: true,
        socialFirstName: true,
        socialGender: true,
        socialLastName: true,
        socioeconomicInfo: true,
        token: true,
        typeField: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Holder] })
  @ApiNestedQuery(HolderFindManyArgs)
  async holders(@common.Req() request: Request): Promise<Holder[]> {
    const args = plainToClass(HolderFindManyArgs, request.query);
    return this.service.holders({
      ...args,
      select: {
        addresses: true,
        affectionateFirstName: true,
        affectionateGender: true,
        affectionateLastName: true,
        attachments: true,
        birthDate: true,
        contactAuthorizationId: true,
        contacts: true,
        documents: true,
        editedFields: true,
        education: true,
        filial: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        maritalStatus: true,
        password: true,
        phones: true,
        requestId: true,
        socialFirstName: true,
        socialGender: true,
        socialLastName: true,
        socioeconomicInfo: true,
        token: true,
        typeField: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Holder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async holder(
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Holder | null> {
    const result = await this.service.holder({
      where: params,
      select: {
        addresses: true,
        affectionateFirstName: true,
        affectionateGender: true,
        affectionateLastName: true,
        attachments: true,
        birthDate: true,
        contactAuthorizationId: true,
        contacts: true,
        documents: true,
        editedFields: true,
        education: true,
        filial: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        maritalStatus: true,
        password: true,
        phones: true,
        requestId: true,
        socialFirstName: true,
        socialGender: true,
        socialLastName: true,
        socioeconomicInfo: true,
        token: true,
        typeField: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: Holder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHolder(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() data: HolderUpdateInput
  ): Promise<Holder | null> {
    try {
      return await this.service.updateHolder({
        where: params,
        data: data,
        select: {
          addresses: true,
          affectionateFirstName: true,
          affectionateGender: true,
          affectionateLastName: true,
          attachments: true,
          birthDate: true,
          contactAuthorizationId: true,
          contacts: true,
          documents: true,
          editedFields: true,
          education: true,
          filial: true,
          firstName: true,
          gender: true,
          id: true,
          lastName: true,
          maritalStatus: true,
          password: true,
          phones: true,
          requestId: true,
          socialFirstName: true,
          socialGender: true,
          socialLastName: true,
          socioeconomicInfo: true,
          token: true,
          typeField: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: Holder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHolder(
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Holder | null> {
    try {
      return await this.service.deleteHolder({
        where: params,
        select: {
          addresses: true,
          affectionateFirstName: true,
          affectionateGender: true,
          affectionateLastName: true,
          attachments: true,
          birthDate: true,
          contactAuthorizationId: true,
          contacts: true,
          documents: true,
          editedFields: true,
          education: true,
          filial: true,
          firstName: true,
          gender: true,
          id: true,
          lastName: true,
          maritalStatus: true,
          password: true,
          phones: true,
          requestId: true,
          socialFirstName: true,
          socialGender: true,
          socialLastName: true,
          socioeconomicInfo: true,
          token: true,
          typeField: true,
          username: true,
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
