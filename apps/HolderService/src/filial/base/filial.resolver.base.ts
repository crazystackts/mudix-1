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
import { Filial } from "./Filial";
import { FilialCountArgs } from "./FilialCountArgs";
import { FilialFindManyArgs } from "./FilialFindManyArgs";
import { FilialFindUniqueArgs } from "./FilialFindUniqueArgs";
import { CreateFilialArgs } from "./CreateFilialArgs";
import { UpdateFilialArgs } from "./UpdateFilialArgs";
import { DeleteFilialArgs } from "./DeleteFilialArgs";
import { FilialService } from "../filial.service";
@graphql.Resolver(() => Filial)
export class FilialResolverBase {
  constructor(protected readonly service: FilialService) {}

  async _filialsMeta(
    @graphql.Args() args: FilialCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Filial])
  async filials(@graphql.Args() args: FilialFindManyArgs): Promise<Filial[]> {
    return this.service.filials(args);
  }

  @graphql.Query(() => Filial, { nullable: true })
  async filial(
    @graphql.Args() args: FilialFindUniqueArgs
  ): Promise<Filial | null> {
    const result = await this.service.filial(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Filial)
  async createFilial(@graphql.Args() args: CreateFilialArgs): Promise<Filial> {
    return await this.service.createFilial({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Filial)
  async updateFilial(
    @graphql.Args() args: UpdateFilialArgs
  ): Promise<Filial | null> {
    try {
      return await this.service.updateFilial({
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

  @graphql.Mutation(() => Filial)
  async deleteFilial(
    @graphql.Args() args: DeleteFilialArgs
  ): Promise<Filial | null> {
    try {
      return await this.service.deleteFilial(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
