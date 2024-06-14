import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { CategoryModule } from "./category/category.module";
import { UnitModule } from "./unit/unit.module";
import { LocationModule } from "./location/location.module";
import { EventModule } from "./event/event.module";
import { SessionModule } from "./session/session.module";
import { TicketModule } from "./ticket/ticket.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { OrderModule } from "./order/order.module";
import { PaymentHistoryModule } from "./paymentHistory/paymentHistory.module";
import { QueueModule } from "./queue/queue.module";
import { UserModule } from "./user/user.module";
import { QueuePositionModule } from "./queuePosition/queuePosition.module";
import { QueueActionModule } from "./queueAction/queueAction.module";
import { QueueHistoryModule } from "./queueHistory/queueHistory.module";
import { NotificationModule } from "./notification/notification.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CustomerModule,
    CategoryModule,
    UnitModule,
    LocationModule,
    EventModule,
    SessionModule,
    TicketModule,
    OrderItemModule,
    OrderModule,
    PaymentHistoryModule,
    QueueModule,
    UserModule,
    QueuePositionModule,
    QueueActionModule,
    QueueHistoryModule,
    NotificationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
