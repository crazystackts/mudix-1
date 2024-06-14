import { Module } from "@nestjs/common";
import { WorkerModule } from "./worker/worker.module";
import { RequestModule } from "./request/request.module";
import { HolderModule } from "./holder/holder.module";
import { EditedFieldModule } from "./editedField/editedField.module";
import { DocumentModule } from "./document/document.module";
import { SocioeconomicInfoModule } from "./socioeconomicInfo/socioeconomicInfo.module";
import { FilialModule } from "./filial/filial.module";
import { AddressModule } from "./address/address.module";
import { PhoneModule } from "./phone/phone.module";
import { ContactAuthorizationModule } from "./contactAuthorization/contactAuthorization.module";
import { ContactModule } from "./contact/contact.module";
import { AttachmentModule } from "./attachment/attachment.module";
import { FileModule } from "./file/file.module";
import { DependentModule } from "./dependent/dependent.module";
import { DependentDocumentModule } from "./dependentDocument/dependentDocument.module";
import { DependentAddressModule } from "./dependentAddress/dependentAddress.module";
import { DependentPhoneModule } from "./dependentPhone/dependentPhone.module";
import { DependentContactAuthorizationModule } from "./dependentContactAuthorization/dependentContactAuthorization.module";
import { DependentContactModule } from "./dependentContact/dependentContact.module";
import { DependentAttachmentModule } from "./dependentAttachment/dependentAttachment.module";
import { DependentFileModule } from "./dependentFile/dependentFile.module";
import { OpenAiModule } from "./OpenAi/openai.module";
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
    WorkerModule,
    RequestModule,
    HolderModule,
    EditedFieldModule,
    DocumentModule,
    SocioeconomicInfoModule,
    FilialModule,
    AddressModule,
    PhoneModule,
    ContactAuthorizationModule,
    ContactModule,
    AttachmentModule,
    FileModule,
    DependentModule,
    DependentDocumentModule,
    DependentAddressModule,
    DependentPhoneModule,
    DependentContactAuthorizationModule,
    DependentContactModule,
    DependentAttachmentModule,
    DependentFileModule,
    OpenAiModule,
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
