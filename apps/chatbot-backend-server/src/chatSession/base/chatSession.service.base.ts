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
  ChatSession as PrismaChatSession,
  User as PrismaUser,
} from "@prisma/client";

export class ChatSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ChatSessionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.chatSession.count(args);
  }

  async chatSessions<T extends Prisma.ChatSessionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatSessionFindManyArgs>
  ): Promise<PrismaChatSession[]> {
    return this.prisma.chatSession.findMany<Prisma.ChatSessionFindManyArgs>(
      args
    );
  }
  async chatSession<T extends Prisma.ChatSessionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatSessionFindUniqueArgs>
  ): Promise<PrismaChatSession | null> {
    return this.prisma.chatSession.findUnique(args);
  }
  async createChatSession<T extends Prisma.ChatSessionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatSessionCreateArgs>
  ): Promise<PrismaChatSession> {
    return this.prisma.chatSession.create<T>(args);
  }
  async updateChatSession<T extends Prisma.ChatSessionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatSessionUpdateArgs>
  ): Promise<PrismaChatSession> {
    return this.prisma.chatSession.update<T>(args);
  }
  async deleteChatSession<T extends Prisma.ChatSessionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ChatSessionDeleteArgs>
  ): Promise<PrismaChatSession> {
    return this.prisma.chatSession.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.chatSession
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
