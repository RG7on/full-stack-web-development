import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../ExampleData";

const initialState = UsersData;

export const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
       addUser(state,action){
          state.push(action.payload)
       }

    }
})

export default userSlice.reducer;
export const{addUser} = userSlice.actions;