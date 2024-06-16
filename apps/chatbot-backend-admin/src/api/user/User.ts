import { ChatSession } from "../chatSession/ChatSession";
import { JsonValue } from "type-fest";

export type User = {
  chatSessions?: Array<ChatSession>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
