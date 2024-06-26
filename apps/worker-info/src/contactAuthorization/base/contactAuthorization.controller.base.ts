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
import { ContactAuthorizationService } from "../contactAuthorization.service";
import { ContactAuthorizationCreateInput } from "./ContactAuthorizationCreateInput";
import { ContactAuthorization } from "./ContactAuthorization";
import { Request } from "../../request/base/Request";
import { ContactAuthorizationFindManyArgs } from "./ContactAuthorizationFindManyArgs";
import { ContactAuthorizationWhereUniqueInput } from "./ContactAuthorizationWhereUniqueInput";
import { ContactAuthorizationUpdateInput } from "./ContactAuthorizationUpdateInput";

export class ContactAuthorizationControllerBase {
  constructor(protected readonly service: ContactAuthorizationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContactAuthorization })
  async createContactAuthorization(
    @common.Body() data: ContactAuthorizationCreateInput
  ): Promise<ContactAuthorization> {
    return await this.service.createContactAuthorization({
      data: {
        ...data,

        holder: {
          connect: data.holder,
        },
      },
      select: {
        email: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        push: true,
        sms: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ContactAuthorization] })
  @ApiNestedQuery(ContactAuthorizationFindManyArgs)
  async contactAuthorizations(
    @common.Req() request: Request
  ): Promise<ContactAuthorization[]> {
    const args = plainToClass(ContactAuthorizationFindManyArgs, request.query);
    return this.service.contactAuthorizations({
      ...args,
      select: {
        email: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        push: true,
        sms: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContactAuthorization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contactAuthorization(
    @common.Param() params: ContactAuthorizationWhereUniqueInput
  ): Promise<ContactAuthorization | null> {
    const result = await this.service.contactAuthorization({
      where: params,
      select: {
        email: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        push: true,
        sms: true,
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
  @swagger.ApiOkResponse({ type: ContactAuthorization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContactAuthorization(
    @common.Param() params: ContactAuthorizationWhereUniqueInput,
    @common.Body() data: ContactAuthorizationUpdateInput
  ): Promise<ContactAuthorization | null> {
    try {
      return await this.service.updateContactAuthorization({
        where: params,
        data: {
          ...data,

          holder: {
            connect: data.holder,
          },
        },
        select: {
          email: true,

          holder: {
            select: {
              id: true,
            },
          },

          id: true,
          push: true,
          sms: true,
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
  @swagger.ApiOkResponse({ type: ContactAuthorization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContactAuthorization(
    @common.Param() params: ContactAuthorizationWhereUniqueInput
  ): Promise<ContactAuthorization | null> {
    try {
      return await this.service.deleteContactAuthorization({
        where: params,
        select: {
          email: true,

          holder: {
            select: {
              id: true,
            },
          },

          id: true,
          push: true,
          sms: true,
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
