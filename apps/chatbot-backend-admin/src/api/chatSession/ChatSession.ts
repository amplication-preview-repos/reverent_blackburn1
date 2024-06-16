import { User } from "../user/User";

export type ChatSession = {
  createdAt: Date;
  endTimestamp: Date | null;
  id: string;
  sessionId: string | null;
  startTimestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
