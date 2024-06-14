/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HolderService } from "../holder.service";
import { HolderCreateInput } from "./HolderCreateInput";
import { Holder } from "./Holder";
import { Request } from "../../request/base/Request";
import { HolderFindManyArgs } from "./HolderFindManyArgs";
import { HolderWhereUniqueInput } from "./HolderWhereUniqueInput";
import { HolderUpdateInput } from "./HolderUpdateInput";
import { AddressFindManyArgs } from "../../address/base/AddressFindManyArgs";
import { Address } from "../../address/base/Address";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { AttachmentFindManyArgs } from "../../attachment/base/AttachmentFindManyArgs";
import { Attachment } from "../../attachment/base/Attachment";
import { AttachmentWhereUniqueInput } from "../../attachment/base/AttachmentWhereUniqueInput";
import { ContactFindManyArgs } from "../../contact/base/ContactFindManyArgs";
import { Contact } from "../../contact/base/Contact";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";
import { EditedFieldFindManyArgs } from "../../editedField/base/EditedFieldFindManyArgs";
import { EditedField } from "../../editedField/base/EditedField";
import { EditedFieldWhereUniqueInput } from "../../editedField/base/EditedFieldWhereUniqueInput";
import { FilialFindManyArgs } from "../../filial/base/FilialFindManyArgs";
import { Filial } from "../../filial/base/Filial";
import { FilialWhereUniqueInput } from "../../filial/base/FilialWhereUniqueInput";
import { PhoneFindManyArgs } from "../../phone/base/PhoneFindManyArgs";
import { Phone } from "../../phone/base/Phone";
import { PhoneWhereUniqueInput } from "../../phone/base/PhoneWhereUniqueInput";
import { SocioeconomicInfoFindManyArgs } from "../../socioeconomicInfo/base/SocioeconomicInfoFindManyArgs";
import { SocioeconomicInfo } from "../../socioeconomicInfo/base/SocioeconomicInfo";
import { SocioeconomicInfoWhereUniqueInput } from "../../socioeconomicInfo/base/SocioeconomicInfoWhereUniqueInput";

export class HolderControllerBase {
  constructor(protected readonly service: HolderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Holder })
  async createHolder(@common.Body() data: HolderCreateInput): Promise<Holder> {
    return await this.service.createHolder({
      data: {
        ...data,

        contactAuthorization: data.contactAuthorization
          ? {
              connect: data.contactAuthorization,
            }
          : undefined,

        request: {
          connect: data.request,
        },
      },
      select: {
        affectionateFirstName: true,
        affectionateGender: true,
        affectionateLastName: true,
        birthDate: true,

        contactAuthorization: {
          select: {
            id: true,
          },
        },

        education: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        maritalStatus: true,
        password: true,

        request: {
          select: {
            id: true,
          },
        },

        socialFirstName: true,
        socialGender: true,
        socialLastName: true,
        token: true,
        typeField: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Holder] })
  @ApiNestedQuery(HolderFindManyArgs)
  async holders(@common.Req() request: Request): Promise<Holder[]> {
    const args = plainToClass(HolderFindManyArgs, request.query);
    return this.service.holders({
      ...args,
      select: {
        affectionateFirstName: true,
        affectionateGender: true,
        affectionateLastName: true,
        birthDate: true,

        contactAuthorization: {
          select: {
            id: true,
          },
        },

        education: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        maritalStatus: true,
        password: true,

        request: {
          select: {
            id: true,
          },
        },

        socialFirstName: true,
        socialGender: true,
        socialLastName: true,
        token: true,
        typeField: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Holder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async holder(
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Holder | null> {
    const result = await this.service.holder({
      where: params,
      select: {
        affectionateFirstName: true,
        affectionateGender: true,
        affectionateLastName: true,
        birthDate: true,

        contactAuthorization: {
          select: {
            id: true,
          },
        },

        education: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        maritalStatus: true,
        password: true,

        request: {
          select: {
            id: true,
          },
        },

        socialFirstName: true,
        socialGender: true,
        socialLastName: true,
        token: true,
        typeField: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Holder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHolder(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() data: HolderUpdateInput
  ): Promise<Holder | null> {
    try {
      return await this.service.updateHolder({
        where: params,
        data: {
          ...data,

          contactAuthorization: data.contactAuthorization
            ? {
                connect: data.contactAuthorization,
              }
            : undefined,

          request: {
            connect: data.request,
          },
        },
        select: {
          affectionateFirstName: true,
          affectionateGender: true,
          affectionateLastName: true,
          birthDate: true,

          contactAuthorization: {
            select: {
              id: true,
            },
          },

          education: true,
          firstName: true,
          gender: true,
          id: true,
          lastName: true,
          maritalStatus: true,
          password: true,

          request: {
            select: {
              id: true,
            },
          },

          socialFirstName: true,
          socialGender: true,
          socialLastName: true,
          token: true,
          typeField: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Holder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHolder(
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Holder | null> {
    try {
      return await this.service.deleteHolder({
        where: params,
        select: {
          affectionateFirstName: true,
          affectionateGender: true,
          affectionateLastName: true,
          birthDate: true,

          contactAuthorization: {
            select: {
              id: true,
            },
          },

          education: true,
          firstName: true,
          gender: true,
          id: true,
          lastName: true,
          maritalStatus: true,
          password: true,

          request: {
            select: {
              id: true,
            },
          },

          socialFirstName: true,
          socialGender: true,
          socialLastName: true,
          token: true,
          typeField: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/addresses")
  @ApiNestedQuery(AddressFindManyArgs)
  async findAddresses(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Address[]> {
    const query = plainToClass(AddressFindManyArgs, request.query);
    const results = await this.service.findAddresses(params.id, {
      ...query,
      select: {
        city: true,
        complement: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        neighborhood: true,
        numberField: true,
        state: true,
        street: true,
        title: true,
        zip: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/addresses")
  async connectAddresses(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/addresses")
  async updateAddresses(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/addresses")
  async disconnectAddresses(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/attachments")
  @ApiNestedQuery(AttachmentFindManyArgs)
  async findAttachments(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Attachment[]> {
    const query = plainToClass(AttachmentFindManyArgs, request.query);
    const results = await this.service.findAttachments(params.id, {
      ...query,
      select: {
        group: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/attachments")
  async connectAttachments(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: AttachmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attachments: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/attachments")
  async updateAttachments(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: AttachmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attachments: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/attachments")
  async disconnectAttachments(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: AttachmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      attachments: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/contacts")
  @ApiNestedQuery(ContactFindManyArgs)
  async findContacts(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Contact[]> {
    const query = plainToClass(ContactFindManyArgs, request.query);
    const results = await this.service.findContacts(params.id, {
      ...query,
      select: {
        email: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/contacts")
  async connectContacts(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contacts: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contacts")
  async updateContacts(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contacts: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contacts")
  async disconnectContacts(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contacts: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/documents")
  @ApiNestedQuery(DocumentFindManyArgs)
  async findDocuments(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Document[]> {
    const query = plainToClass(DocumentFindManyArgs, request.query);
    const results = await this.service.findDocuments(params.id, {
      ...query,
      select: {
        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        issuer: true,
        numberField: true,
        typeField: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/documents")
  async connectDocuments(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/documents")
  async updateDocuments(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/documents")
  async disconnectDocuments(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: DocumentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      documents: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/editedFields")
  @ApiNestedQuery(EditedFieldFindManyArgs)
  async findEditedFields(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<EditedField[]> {
    const query = plainToClass(EditedFieldFindManyArgs, request.query);
    const results = await this.service.findEditedFields(params.id, {
      ...query,
      select: {
        fieldName: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/editedFields")
  async connectEditedFields(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: EditedFieldWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      editedFields: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/editedFields")
  async updateEditedFields(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: EditedFieldWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      editedFields: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/editedFields")
  async disconnectEditedFields(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: EditedFieldWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      editedFields: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/filial")
  @ApiNestedQuery(FilialFindManyArgs)
  async findFilial(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Filial[]> {
    const query = plainToClass(FilialFindManyArgs, request.query);
    const results = await this.service.findFilial(params.id, {
      ...query,
      select: {
        firstName: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        lastName: true,
        typeField: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/filial")
  async connectFilial(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: FilialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      filial: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/filial")
  async updateFilial(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: FilialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      filial: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/filial")
  async disconnectFilial(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: FilialWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      filial: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/phones")
  @ApiNestedQuery(PhoneFindManyArgs)
  async findPhones(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<Phone[]> {
    const query = plainToClass(PhoneFindManyArgs, request.query);
    const results = await this.service.findPhones(params.id, {
      ...query,
      select: {
        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        numberField: true,
        typeField: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/phones")
  async connectPhones(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: PhoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      phones: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/phones")
  async updatePhones(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: PhoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      phones: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/phones")
  async disconnectPhones(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: PhoneWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      phones: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/socioeconomicInfo")
  @ApiNestedQuery(SocioeconomicInfoFindManyArgs)
  async findSocioeconomicInfo(
    @common.Req() request: Request,
    @common.Param() params: HolderWhereUniqueInput
  ): Promise<SocioeconomicInfo[]> {
    const query = plainToClass(SocioeconomicInfoFindManyArgs, request.query);
    const results = await this.service.findSocioeconomicInfo(params.id, {
      ...query,
      select: {
        familyIncomeCode: true,
        familyIncomeTitle: true,

        holder: {
          select: {
            id: true,
          },
        },

        id: true,
        salaryCode: true,
        salaryTitle: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/socioeconomicInfo")
  async connectSocioeconomicInfo(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: SocioeconomicInfoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      socioeconomicInfo: {
        connect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/socioeconomicInfo")
  async updateSocioeconomicInfo(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: SocioeconomicInfoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      socioeconomicInfo: {
        set: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/socioeconomicInfo")
  async disconnectSocioeconomicInfo(
    @common.Param() params: HolderWhereUniqueInput,
    @common.Body() body: SocioeconomicInfoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      socioeconomicInfo: {
        disconnect: body,
      },
    };
    await this.service.updateHolder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
