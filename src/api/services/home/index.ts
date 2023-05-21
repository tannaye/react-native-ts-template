import {get} from "@src/api/axios";
import {fetchTodoListUrl} from "@src/api/endpoints";

export const fetchTodoListApi = async (query: string) => {
  return await get(fetchTodoListUrl + `?="${query}`);
};
