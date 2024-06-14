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
import { UnitService } from "../unit.service";
import { UnitCreateInput } from "./UnitCreateInput";
import { Unit } from "./Unit";
import { UnitFindManyArgs } from "./UnitFindManyArgs";
import { UnitWhereUniqueInput } from "./UnitWhereUniqueInput";
import { UnitUpdateInput } from "./UnitUpdateInput";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";

export class UnitControllerBase {
  constructor(protected readonly service: UnitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Unit })
  async createUnit(@common.Body() data: UnitCreateInput): Promise<Unit> {
    return await this.service.createUnit({
      data: data,
      select: {
        id: true,
        unitName: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Unit] })
  @ApiNestedQuery(UnitFindManyArgs)
  async units(@common.Req() request: Request): Promise<Unit[]> {
    const args = plainToClass(UnitFindManyArgs, request.query);
    return this.service.units({
      ...args,
      select: {
        id: true,
        unitName: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async unit(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    const result = await this.service.unit({
      where: params,
      select: {
        id: true,
        unitName: true,
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
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUnit(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() data: UnitUpdateInput
  ): Promise<Unit | null> {
    try {
      return await this.service.updateUnit({
        where: params,
        data: data,
        select: {
          id: true,
          unitName: true,
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
  @swagger.ApiOkResponse({ type: Unit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUnit(
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Unit | null> {
    try {
      return await this.service.deleteUnit({
        where: params,
        select: {
          id: true,
          unitName: true,
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

  @common.Get("/:id/events")
  @ApiNestedQuery(EventFindManyArgs)
  async findEvents(
    @common.Req() request: Request,
    @common.Param() params: UnitWhereUniqueInput
  ): Promise<Event[]> {
    const query = plainToClass(EventFindManyArgs, request.query);
    const results = await this.service.findEvents(params.id, {
      ...query,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        eventClassification: true,
        eventDetail: true,
        eventDuration: true,
        eventImage: true,
        eventName: true,
        eventStatus: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        unit: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/events")
  async connectEvents(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        connect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/events")
  async updateEvents(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        set: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/events")
  async disconnectEvents(
    @common.Param() params: UnitWhereUniqueInput,
    @common.Body() body: EventWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      events: {
        disconnect: body,
      },
    };
    await this.service.updateUnit({
      where: params,
      data,
      select: { id: true },
    });
  }
}
