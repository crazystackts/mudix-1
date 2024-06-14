import * as graphql from "@nestjs/graphql";
import { WorkerResolverBase } from "./base/worker.resolver.base";
import { Worker } from "./base/Worker";
import { WorkerService } from "./worker.service";

@graphql.Resolver(() => Worker)
export class WorkerResolver extends WorkerResolverBase {
  constructor(protected readonly service: WorkerService) {
    super(service);
  }
}
