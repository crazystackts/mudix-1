/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Queue } from "./Queue";
import { QueueCountArgs } from "./QueueCountArgs";
import { QueueFindManyArgs } from "./QueueFindManyArgs";
import { QueueFindUniqueArgs } from "./QueueFindUniqueArgs";
import { CreateQueueArgs } from "./CreateQueueArgs";
import { UpdateQueueArgs } from "./UpdateQueueArgs";
import { DeleteQueueArgs } from "./DeleteQueueArgs";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { QueueActionFindManyArgs } from "../../queueAction/base/QueueActionFindManyArgs";
import { QueueAction } from "../../queueAction/base/QueueAction";
import { QueueHistoryFindManyArgs } from "../../queueHistory/base/QueueHistoryFindManyArgs";
import { QueueHistory } from "../../queueHistory/base/QueueHistory";
import { QueuePositionFindManyArgs } from "../../queuePosition/base/QueuePositionFindManyArgs";
import { QueuePosition } from "../../queuePosition/base/QueuePosition";
import { QueueService } from "../queue.service";
@graphql.Resolver(() => Queue)
export class QueueResolverBase {
  constructor(protected readonly service: QueueService) {}

  async _queuesMeta(
    @graphql.Args() args: QueueCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Queue])
  async queues(@graphql.Args() args: QueueFindManyArgs): Promise<Queue[]> {
    return this.service.queues(args);
  }

  @graphql.Query(() => Queue, { nullable: true })
  async queue(
    @graphql.Args() args: QueueFindUniqueArgs
  ): Promise<Queue | null> {
    const result = await this.service.queue(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Queue)
  async createQueue(@graphql.Args() args: CreateQueueArgs): Promise<Queue> {
    return await this.service.createQueue({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Queue)
  async updateQueue(
    @graphql.Args() args: UpdateQueueArgs
  ): Promise<Queue | null> {
    try {
      return await this.service.updateQueue({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Queue)
  async deleteQueue(
    @graphql.Args() args: DeleteQueueArgs
  ): Promise<Queue | null> {
    try {
      return await this.service.deleteQueue(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Notification], { name: "notifications" })
  async findNotifications(
    @graphql.Parent() parent: Queue,
    @graphql.Args() args: NotificationFindManyArgs
  ): Promise<Notification[]> {
    const results = await this.service.findNotifications(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [QueueAction], { name: "queueActions" })
  async findQueueActions(
    @graphql.Parent() parent: Queue,
    @graphql.Args() args: QueueActionFindManyArgs
  ): Promise<QueueAction[]> {
    const results = await this.service.findQueueActions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [QueueHistory], { name: "queueHistories" })
  async findQueueHistories(
    @graphql.Parent() parent: Queue,
    @graphql.Args() args: QueueHistoryFindManyArgs
  ): Promise<QueueHistory[]> {
    const results = await this.service.findQueueHistories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [QueuePosition], { name: "queuePositions" })
  async findQueuePositions(
    @graphql.Parent() parent: Queue,
    @graphql.Args() args: QueuePositionFindManyArgs
  ): Promise<QueuePosition[]> {
    const results = await this.service.findQueuePositions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
