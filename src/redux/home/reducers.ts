import {createSlice} from "@reduxjs/toolkit";
import {fetchTodoList} from "./actions";

interface IState {
  todoList: any[];
  loading: boolean;
}

const initialState: IState = {
  todoList: [],
  loading: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchTodoList.pending, (state: IState) => {
      state.loading = true;
    });
    builder.addCase(fetchTodoList.fulfilled, (state: IState, action: any) => {
      state.todoList = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchTodoList.rejected, (state: IState) => {
      console.log("rejected");
      state.loading = false;
    });
  },
});

export default homeSlice.reducer;
