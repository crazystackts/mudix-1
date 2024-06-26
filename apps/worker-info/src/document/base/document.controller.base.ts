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
import { DocumentService } from "../document.service";
import { DocumentCreateInput } from "./DocumentCreateInput";
import { Document } from "./Document";
import { Request } from "../../request/base/Request";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentWhereUniqueInput } from "./DocumentWhereUniqueInput";
import { DocumentUpdateInput } from "./DocumentUpdateInput";

export class DocumentControllerBase {
  constructor(protected readonly service: DocumentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Document })
  async createDocument(
    @common.Body() data: DocumentCreateInput
  ): Promise<Document> {
    return await this.service.createDocument({
      data: {
        ...data,

        holder: {
          connect: data.holder,
        },
      },
      select: {
        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        issuer: true,
        numberField: true,
        typeField: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Document] })
  @ApiNestedQuery(DocumentFindManyArgs)
  async documents(@common.Req() request: Request): Promise<Document[]> {
    const args = plainToClass(DocumentFindManyArgs, request.query);
    return this.service.documents({
      ...args,
      select: {
        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        issuer: true,
        numberField: true,
        typeField: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async document(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    const result = await this.service.document({
      where: params,
      select: {
        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        issuer: true,
        numberField: true,
        typeField: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocument(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() data: DocumentUpdateInput
  ): Promise<Document | null> {
    try {
      return await this.service.updateDocument({
        where: params,
        data: {
          ...data,

          holder: {
            connect: data.holder,
          },
        },
        select: {
          holder: {
            select: {
              id: true,
            },
          },

          id: true,
          issuer: true,
          numberField: true,
          typeField: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocument(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    try {
      return await this.service.deleteDocument({
        where: params,
        select: {
          holder: {
            select: {
              id: true,
            },
          },

          id: true,
          issuer: true,
          numberField: true,
          typeField: true,
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
