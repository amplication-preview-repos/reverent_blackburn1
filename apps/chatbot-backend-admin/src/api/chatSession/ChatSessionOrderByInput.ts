import { SortOrder } from "../../util/SortOrder";

export type ChatSessionOrderByInput = {
  createdAt?: SortOrder;
  endTimestamp?: SortOrder;
  id?: SortOrder;
  sessionId?: SortOrder;
  startTimestamp?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
