import { createSlice } from "@reduxjs/toolkit";
import UsersData from "../ExampleData";

const initialState = UsersData;

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newId = state.length > 0 ? Math.max(...state.map(user => user.id)) + 1 : 1;
            state.push({ ...action.payload, id: newId });
        },
        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        },
        updateUser: (state, action) => {
            const index = state.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload };
            }
        }
    }
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
