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
import { PaymentHistoryService } from "../paymentHistory.service";
import { PaymentHistoryCreateInput } from "./PaymentHistoryCreateInput";
import { PaymentHistory } from "./PaymentHistory";
import { PaymentHistoryFindManyArgs } from "./PaymentHistoryFindManyArgs";
import { PaymentHistoryWhereUniqueInput } from "./PaymentHistoryWhereUniqueInput";
import { PaymentHistoryUpdateInput } from "./PaymentHistoryUpdateInput";

export class PaymentHistoryControllerBase {
  constructor(protected readonly service: PaymentHistoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentHistory })
  async createPaymentHistory(
    @common.Body() data: PaymentHistoryCreateInput
  ): Promise<PaymentHistory> {
    return await this.service.createPaymentHistory({
      data: {
        ...data,

        orders: {
          connect: data.orders,
        },
      },
      select: {
        id: true,

        orders: {
          select: {
            id: true,
          },
        },

        paymentAmount: true,
        paymentDate: true,
        paymentMethod: true,
        paymentStatus: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentHistory] })
  @ApiNestedQuery(PaymentHistoryFindManyArgs)
  async paymentHistories(
    @common.Req() request: Request
  ): Promise<PaymentHistory[]> {
    const args = plainToClass(PaymentHistoryFindManyArgs, request.query);
    return this.service.paymentHistories({
      ...args,
      select: {
        id: true,

        orders: {
          select: {
            id: true,
          },
        },

        paymentAmount: true,
        paymentDate: true,
        paymentMethod: true,
        paymentStatus: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async paymentHistory(
    @common.Param() params: PaymentHistoryWhereUniqueInput
  ): Promise<PaymentHistory | null> {
    const result = await this.service.paymentHistory({
      where: params,
      select: {
        id: true,

        orders: {
          select: {
            id: true,
          },
        },

        paymentAmount: true,
        paymentDate: true,
        paymentMethod: true,
        paymentStatus: true,
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
  @swagger.ApiOkResponse({ type: PaymentHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePaymentHistory(
    @common.Param() params: PaymentHistoryWhereUniqueInput,
    @common.Body() data: PaymentHistoryUpdateInput
  ): Promise<PaymentHistory | null> {
    try {
      return await this.service.updatePaymentHistory({
        where: params,
        data: {
          ...data,

          orders: {
            connect: data.orders,
          },
        },
        select: {
          id: true,

          orders: {
            select: {
              id: true,
            },
          },

          paymentAmount: true,
          paymentDate: true,
          paymentMethod: true,
          paymentStatus: true,
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
  @swagger.ApiOkResponse({ type: PaymentHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePaymentHistory(
    @common.Param() params: PaymentHistoryWhereUniqueInput
  ): Promise<PaymentHistory | null> {
    try {
      return await this.service.deletePaymentHistory({
        where: params,
        select: {
          id: true,

          orders: {
            select: {
              id: true,
            },
          },

          paymentAmount: true,
          paymentDate: true,
          paymentMethod: true,
          paymentStatus: true,
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
