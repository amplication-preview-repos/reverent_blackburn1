import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatSessionUpdateInput = {
  endTimestamp?: Date | null;
  sessionId?: string | null;
  startTimestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
