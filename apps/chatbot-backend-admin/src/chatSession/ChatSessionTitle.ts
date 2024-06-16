import { ChatSession as TChatSession } from "../api/chatSession/ChatSession";

export const CHATSESSION_TITLE_FIELD = "sessionId";

export const ChatSessionTitle = (record: TChatSession): string => {
  return record.sessionId?.toString() || String(record.id);
};
