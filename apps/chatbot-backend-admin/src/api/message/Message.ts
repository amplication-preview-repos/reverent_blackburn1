export type Message = {
  createdAt: Date;
  id: string;
  messageContent: string | null;
  sender: string | null;
  sessionId: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
