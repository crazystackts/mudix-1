/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EditedField as PrismaEditedField,
  Holder as PrismaHolder,
} from "@prisma/client";

export class EditedFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EditedFieldCountArgs, "select">
  ): Promise<number> {
    return this.prisma.editedField.count(args);
  }

  async editedFields<T extends Prisma.EditedFieldFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditedFieldFindManyArgs>
  ): Promise<PrismaEditedField[]> {
    return this.prisma.editedField.findMany<Prisma.EditedFieldFindManyArgs>(
      args
    );
  }
  async editedField<T extends Prisma.EditedFieldFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditedFieldFindUniqueArgs>
  ): Promise<PrismaEditedField | null> {
    return this.prisma.editedField.findUnique(args);
  }
  async createEditedField<T extends Prisma.EditedFieldCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditedFieldCreateArgs>
  ): Promise<PrismaEditedField> {
    return this.prisma.editedField.create<T>(args);
  }
  async updateEditedField<T extends Prisma.EditedFieldUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditedFieldUpdateArgs>
  ): Promise<PrismaEditedField> {
    return this.prisma.editedField.update<T>(args);
  }
  async deleteEditedField<T extends Prisma.EditedFieldDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EditedFieldDeleteArgs>
  ): Promise<PrismaEditedField> {
    return this.prisma.editedField.delete(args);
  }

  async getHolder(parentId: string): Promise<PrismaHolder | null> {
    return this.prisma.editedField
      .findUnique({
        where: { id: parentId },
      })
      .holder();
  }
}