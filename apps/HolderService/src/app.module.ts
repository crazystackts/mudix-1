import { Module } from "@nestjs/common";
import { AddressModule } from "./address/address.module";
import { AttachmentModule } from "./attachment/attachment.module";
import { ContactAuthorizationModule } from "./contactAuthorization/contactAuthorization.module";
import { ContactModule } from "./contact/contact.module";
import { DocumentModule } from "./document/document.module";
import { EditedFieldModule } from "./editedField/editedField.module";
import { FilialModule } from "./filial/filial.module";
import { PhoneModule } from "./phone/phone.module";
import { SocioeconomicInfoModule } from "./socioeconomicInfo/socioeconomicInfo.module";
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
    AddressModule,
    AttachmentModule,
    ContactAuthorizationModule,
    ContactModule,
    DocumentModule,
    EditedFieldModule,
    FilialModule,
    PhoneModule,
    SocioeconomicInfoModule,
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
