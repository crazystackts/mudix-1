import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EditedFieldServiceBase } from "./base/editedField.service.base";

@Injectable()
export class EditedFieldService extends EditedFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
