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
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";
import { QueueActionFindManyArgs } from "../../queueAction/base/QueueActionFindManyArgs";
import { QueueAction } from "../../queueAction/base/QueueAction";
import { QueueActionWhereUniqueInput } from "../../queueAction/base/QueueActionWhereUniqueInput";
import { QueuePositionFindManyArgs } from "../../queuePosition/base/QueuePositionFindManyArgs";
import { QueuePosition } from "../../queuePosition/base/QueuePosition";
import { QueuePositionWhereUniqueInput } from "../../queuePosition/base/QueuePositionWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: {
        ...data,

        customers: data.customers
          ? {
              connect: data.customers,
            }
          : undefined,
      },
      select: {
        customers: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,
        role: true,
        userName: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        customers: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,
        role: true,
        userName: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        customers: {
          select: {
            id: true,
          },
        },

        email: true,
        id: true,
        role: true,
        userName: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: {
          ...data,

          customers: data.customers
            ? {
                connect: data.customers,
              }
            : undefined,
        },
        select: {
          customers: {
            select: {
              id: true,
            },
          },

          email: true,
          id: true,
          role: true,
          userName: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          customers: {
            select: {
              id: true,
            },
          },

          email: true,
          id: true,
          role: true,
          userName: true,
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

  @common.Get("/:id/notifications")
  @ApiNestedQuery(NotificationFindManyArgs)
  async findNotifications(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Notification[]> {
    const query = plainToClass(NotificationFindManyArgs, request.query);
    const results = await this.service.findNotifications(params.id, {
      ...query,
      select: {
        id: true,
        message: true,

        queues: {
          select: {
            id: true,
          },
        },

        sentAt: true,

        users: {
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

  @common.Post("/:id/notifications")
  async connectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/notifications")
  async updateNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/notifications")
  async disconnectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/queueActions")
  @ApiNestedQuery(QueueActionFindManyArgs)
  async findQueueActions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<QueueAction[]> {
    const query = plainToClass(QueueActionFindManyArgs, request.query);
    const results = await this.service.findQueueActions(params.id, {
      ...query,
      select: {
        actionTimestamp: true,
        actionType: true,
        details: true,
        id: true,

        queues: {
          select: {
            id: true,
          },
        },

        users: {
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

  @common.Post("/:id/queueActions")
  async connectQueueActions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueueActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueActions: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/queueActions")
  async updateQueueActions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueueActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueActions: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/queueActions")
  async disconnectQueueActions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueueActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueActions: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/queuePositions")
  @ApiNestedQuery(QueuePositionFindManyArgs)
  async findQueuePositions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<QueuePosition[]> {
    const query = plainToClass(QueuePositionFindManyArgs, request.query);
    const results = await this.service.findQueuePositions(params.id, {
      ...query,
      select: {
        id: true,
        joinedAt: true,
        posicaoAtual: true,
        priorityLevel: true,

        queues: {
          select: {
            id: true,
          },
        },

        sessions: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        users: {
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

  @common.Post("/:id/queuePositions")
  async connectQueuePositions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueuePositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queuePositions: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/queuePositions")
  async updateQueuePositions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueuePositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queuePositions: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/queuePositions")
  async disconnectQueuePositions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: QueuePositionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queuePositions: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
