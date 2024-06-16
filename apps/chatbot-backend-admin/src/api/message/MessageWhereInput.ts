import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  messageContent?: StringNullableFilter;
  sender?: StringNullableFilter;
  sessionId?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
