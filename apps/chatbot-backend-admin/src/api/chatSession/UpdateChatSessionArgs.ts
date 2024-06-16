import { ChatSessionWhereUniqueInput } from "./ChatSessionWhereUniqueInput";
import { ChatSessionUpdateInput } from "./ChatSessionUpdateInput";

export type UpdateChatSessionArgs = {
  where: ChatSessionWhereUniqueInput;
  data: ChatSessionUpdateInput;
};
