import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageContent?: SortOrder;
  sender?: SortOrder;
  sessionId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
