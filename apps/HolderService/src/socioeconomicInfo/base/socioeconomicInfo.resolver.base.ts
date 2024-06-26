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
import { SocioeconomicInfo } from "./SocioeconomicInfo";
import { SocioeconomicInfoCountArgs } from "./SocioeconomicInfoCountArgs";
import { SocioeconomicInfoFindManyArgs } from "./SocioeconomicInfoFindManyArgs";
import { SocioeconomicInfoFindUniqueArgs } from "./SocioeconomicInfoFindUniqueArgs";
import { CreateSocioeconomicInfoArgs } from "./CreateSocioeconomicInfoArgs";
import { UpdateSocioeconomicInfoArgs } from "./UpdateSocioeconomicInfoArgs";
import { DeleteSocioeconomicInfoArgs } from "./DeleteSocioeconomicInfoArgs";
import { SocioeconomicInfoService } from "../socioeconomicInfo.service";
@graphql.Resolver(() => SocioeconomicInfo)
export class SocioeconomicInfoResolverBase {
  constructor(protected readonly service: SocioeconomicInfoService) {}

  async _socioeconomicInfosMeta(
    @graphql.Args() args: SocioeconomicInfoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SocioeconomicInfo])
  async socioeconomicInfos(
    @graphql.Args() args: SocioeconomicInfoFindManyArgs
  ): Promise<SocioeconomicInfo[]> {
    return this.service.socioeconomicInfos(args);
  }

  @graphql.Query(() => SocioeconomicInfo, { nullable: true })
  async socioeconomicInfo(
    @graphql.Args() args: SocioeconomicInfoFindUniqueArgs
  ): Promise<SocioeconomicInfo | null> {
    const result = await this.service.socioeconomicInfo(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SocioeconomicInfo)
  async createSocioeconomicInfo(
    @graphql.Args() args: CreateSocioeconomicInfoArgs
  ): Promise<SocioeconomicInfo> {
    return await this.service.createSocioeconomicInfo({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SocioeconomicInfo)
  async updateSocioeconomicInfo(
    @graphql.Args() args: UpdateSocioeconomicInfoArgs
  ): Promise<SocioeconomicInfo | null> {
    try {
      return await this.service.updateSocioeconomicInfo({
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

  @graphql.Mutation(() => SocioeconomicInfo)
  async deleteSocioeconomicInfo(
    @graphql.Args() args: DeleteSocioeconomicInfoArgs
  ): Promise<SocioeconomicInfo | null> {
    try {
      return await this.service.deleteSocioeconomicInfo(args);
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
