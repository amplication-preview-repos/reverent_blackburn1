import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatSessionCreateInput = {
  endTimestamp?: Date | null;
  sessionId?: string | null;
  startTimestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
