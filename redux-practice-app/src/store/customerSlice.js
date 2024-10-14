import { createSlice } from '@reduxjs/toolkit';
import CustomerData from '../CustomerData';

const initialState = {
  customers: CustomerData,
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    removeCustomer: (state, action) => {
      state.customers = state.customers.filter(customer => customer.id !== action.payload);
    },
    updateCustomer: (state, action) => {
      const index = state.customers.findIndex(customer => customer.id === action.payload.id);
      if (index !== -1) {
        const updatedCustomer = { ...state.customers[index], ...action.payload };
        // Only update password if it's provided in the payload
        if (!action.payload.password) {
          delete updatedCustomer.password;
        }
        state.customers[index] = updatedCustomer;
      }
    },
  },
});

export const { addCustomer, removeCustomer, updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;