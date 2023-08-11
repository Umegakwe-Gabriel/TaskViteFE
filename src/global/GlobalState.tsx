import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskState: "" || null
}

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    createUser: ((state, {payload}) => {
        state.taskState = payload
    }),

    logOut: (state) => {
        state.taskState = null
    }
  }
});

export const { createUser, logOut } = GlobalState.actions

export default GlobalState.reducer