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
import { AddressService } from "../address.service";
import { AddressCreateInput } from "./AddressCreateInput";
import { Address } from "./Address";
import { Request } from "../../request/base/Request";
import { AddressFindManyArgs } from "./AddressFindManyArgs";
import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { AddressUpdateInput } from "./AddressUpdateInput";

export class AddressControllerBase {
  constructor(protected readonly service: AddressService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Address })
  async createAddress(
    @common.Body() data: AddressCreateInput
  ): Promise<Address> {
    return await this.service.createAddress({
      data: {
        ...data,

        holder: {
          connect: data.holder,
        },
      },
      select: {
        city: true,
        complement: true,

        holder: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: [Address] })
  @ApiNestedQuery(AddressFindManyArgs)
  async addresses(@common.Req() request: Request): Promise<Address[]> {
    const args = plainToClass(AddressFindManyArgs, request.query);
    return this.service.addresses({
      ...args,
      select: {
        city: true,
        complement: true,

        holder: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async address(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    const result = await this.service.address({
      where: params,
      select: {
        city: true,
        complement: true,

        holder: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAddress(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body() data: AddressUpdateInput
  ): Promise<Address | null> {
    try {
      return await this.service.updateAddress({
        where: params,
        data: {
          ...data,

          holder: {
            connect: data.holder,
          },
        },
        select: {
          city: true,
          complement: true,

          holder: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAddress(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    try {
      return await this.service.deleteAddress({
        where: params,
        select: {
          city: true,
          complement: true,

          holder: {
            select: {
              id: true,
            },
          },

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
