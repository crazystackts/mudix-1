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
import { FileService } from "../file.service";
import { FileCreateInput } from "./FileCreateInput";
import { File } from "./File";
import { FileFindManyArgs } from "./FileFindManyArgs";
import { FileWhereUniqueInput } from "./FileWhereUniqueInput";
import { FileUpdateInput } from "./FileUpdateInput";

export class FileControllerBase {
  constructor(protected readonly service: FileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: File })
  async createFile(@common.Body() data: FileCreateInput): Promise<File> {
    return await this.service.createFile({
      data: data,
      select: {
        attachmentsId: true,
        filename: true,
        id: true,
        name: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [File] })
  @ApiNestedQuery(FileFindManyArgs)
  async files(@common.Req() request: Request): Promise<File[]> {
    const args = plainToClass(FileFindManyArgs, request.query);
    return this.service.files({
      ...args,
      select: {
        attachmentsId: true,
        filename: true,
        id: true,
        name: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: File })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async file(
    @common.Param() params: FileWhereUniqueInput
  ): Promise<File | null> {
    const result = await this.service.file({
      where: params,
      select: {
        attachmentsId: true,
        filename: true,
        id: true,
        name: true,
        url: true,
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
  @swagger.ApiOkResponse({ type: File })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFile(
    @common.Param() params: FileWhereUniqueInput,
    @common.Body() data: FileUpdateInput
  ): Promise<File | null> {
    try {
      return await this.service.updateFile({
        where: params,
        data: data,
        select: {
          attachmentsId: true,
          filename: true,
          id: true,
          name: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: File })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFile(
    @common.Param() params: FileWhereUniqueInput
  ): Promise<File | null> {
    try {
      return await this.service.deleteFile({
        where: params,
        select: {
          attachmentsId: true,
          filename: true,
          id: true,
          name: true,
          url: true,
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
