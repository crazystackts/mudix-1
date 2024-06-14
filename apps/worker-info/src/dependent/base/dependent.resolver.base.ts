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
import { Dependent } from "./Dependent";
import { DependentCountArgs } from "./DependentCountArgs";
import { DependentFindManyArgs } from "./DependentFindManyArgs";
import { DependentFindUniqueArgs } from "./DependentFindUniqueArgs";
import { CreateDependentArgs } from "./CreateDependentArgs";
import { UpdateDependentArgs } from "./UpdateDependentArgs";
import { DeleteDependentArgs } from "./DeleteDependentArgs";
import { DependentService } from "../dependent.service";
@graphql.Resolver(() => Dependent)
export class DependentResolverBase {
  constructor(protected readonly service: DependentService) {}

  async _dependentsMeta(
    @graphql.Args() args: DependentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Dependent])
  async dependents(
    @graphql.Args() args: DependentFindManyArgs
  ): Promise<Dependent[]> {
    return this.service.dependents(args);
  }

  @graphql.Query(() => Dependent, { nullable: true })
  async dependent(
    @graphql.Args() args: DependentFindUniqueArgs
  ): Promise<Dependent | null> {
    const result = await this.service.dependent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Dependent)
  async createDependent(
    @graphql.Args() args: CreateDependentArgs
  ): Promise<Dependent> {
    return await this.service.createDependent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Dependent)
  async updateDependent(
    @graphql.Args() args: UpdateDependentArgs
  ): Promise<Dependent | null> {
    try {
      return await this.service.updateDependent({
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

  @graphql.Mutation(() => Dependent)
  async deleteDependent(
    @graphql.Args() args: DeleteDependentArgs
  ): Promise<Dependent | null> {
    try {
      return await this.service.deleteDependent(args);
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
