import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatSessionWhereInput = {
  endTimestamp?: DateTimeNullableFilter;
  id?: StringFilter;
  sessionId?: StringNullableFilter;
  startTimestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
