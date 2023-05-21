import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchTodoListApi} from "@src/api/services/home";
import {FETCH_TODO_LIST} from "./actionTypes";

export const fetchTodoList = createAsyncThunk(
  FETCH_TODO_LIST,
  async (query: string) => {
    try {
      const response = await fetchTodoListApi(query);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);
