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
import { WorkerService } from "../worker.service";
import { WorkerCreateInput } from "./WorkerCreateInput";
import { Worker } from "./Worker";
import { WorkerFindManyArgs } from "./WorkerFindManyArgs";
import { WorkerWhereUniqueInput } from "./WorkerWhereUniqueInput";
import { WorkerUpdateInput } from "./WorkerUpdateInput";

export class WorkerControllerBase {
  constructor(protected readonly service: WorkerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Worker })
  async createWorker(@common.Body() data: WorkerCreateInput): Promise<Worker> {
    return await this.service.createWorker({
      data: data,
      select: {
        cnpj: true,
        companyName: true,
        cpf: true,
        ctpsNumber: true,
        ctpsSeries: true,
        firstName: true,
        id: true,
        lastName: true,
        request: true,
        status: true,
        typeField: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Worker] })
  @ApiNestedQuery(WorkerFindManyArgs)
  async workers(@common.Req() request: Request): Promise<Worker[]> {
    const args = plainToClass(WorkerFindManyArgs, request.query);
    return this.service.workers({
      ...args,
      select: {
        cnpj: true,
        companyName: true,
        cpf: true,
        ctpsNumber: true,
        ctpsSeries: true,
        firstName: true,
        id: true,
        lastName: true,
        request: true,
        status: true,
        typeField: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Worker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async worker(
    @common.Param() params: WorkerWhereUniqueInput
  ): Promise<Worker | null> {
    const result = await this.service.worker({
      where: params,
      select: {
        cnpj: true,
        companyName: true,
        cpf: true,
        ctpsNumber: true,
        ctpsSeries: true,
        firstName: true,
        id: true,
        lastName: true,
        request: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: Worker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateWorker(
    @common.Param() params: WorkerWhereUniqueInput,
    @common.Body() data: WorkerUpdateInput
  ): Promise<Worker | null> {
    try {
      return await this.service.updateWorker({
        where: params,
        data: data,
        select: {
          cnpj: true,
          companyName: true,
          cpf: true,
          ctpsNumber: true,
          ctpsSeries: true,
          firstName: true,
          id: true,
          lastName: true,
          request: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Worker })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteWorker(
    @common.Param() params: WorkerWhereUniqueInput
  ): Promise<Worker | null> {
    try {
      return await this.service.deleteWorker({
        where: params,
        select: {
          cnpj: true,
          companyName: true,
          cpf: true,
          ctpsNumber: true,
          ctpsSeries: true,
          firstName: true,
          id: true,
          lastName: true,
          request: true,
          status: true,
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
