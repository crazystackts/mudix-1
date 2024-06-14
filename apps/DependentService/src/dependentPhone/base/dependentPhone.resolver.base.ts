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
import { DependentPhone } from "./DependentPhone";
import { DependentPhoneCountArgs } from "./DependentPhoneCountArgs";
import { DependentPhoneFindManyArgs } from "./DependentPhoneFindManyArgs";
import { DependentPhoneFindUniqueArgs } from "./DependentPhoneFindUniqueArgs";
import { CreateDependentPhoneArgs } from "./CreateDependentPhoneArgs";
import { UpdateDependentPhoneArgs } from "./UpdateDependentPhoneArgs";
import { DeleteDependentPhoneArgs } from "./DeleteDependentPhoneArgs";
import { DependentPhoneService } from "../dependentPhone.service";
@graphql.Resolver(() => DependentPhone)
export class DependentPhoneResolverBase {
  constructor(protected readonly service: DependentPhoneService) {}

  async _dependentPhonesMeta(
    @graphql.Args() args: DependentPhoneCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DependentPhone])
  async dependentPhones(
    @graphql.Args() args: DependentPhoneFindManyArgs
  ): Promise<DependentPhone[]> {
    return this.service.dependentPhones(args);
  }

  @graphql.Query(() => DependentPhone, { nullable: true })
  async dependentPhone(
    @graphql.Args() args: DependentPhoneFindUniqueArgs
  ): Promise<DependentPhone | null> {
    const result = await this.service.dependentPhone(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DependentPhone)
  async createDependentPhone(
    @graphql.Args() args: CreateDependentPhoneArgs
  ): Promise<DependentPhone> {
    return await this.service.createDependentPhone({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DependentPhone)
  async updateDependentPhone(
    @graphql.Args() args: UpdateDependentPhoneArgs
  ): Promise<DependentPhone | null> {
    try {
      return await this.service.updateDependentPhone({
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

  @graphql.Mutation(() => DependentPhone)
  async deleteDependentPhone(
    @graphql.Args() args: DeleteDependentPhoneArgs
  ): Promise<DependentPhone | null> {
    try {
      return await this.service.deleteDependentPhone(args);
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