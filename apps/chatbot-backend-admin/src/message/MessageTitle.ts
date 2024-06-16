import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "sender";

export const MessageTitle = (record: TMessage): string => {
  return record.sender?.toString() || String(record.id);
};
