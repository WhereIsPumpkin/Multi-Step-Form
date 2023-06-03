import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  subscriptionType: "Monthly",
  addOns: {
    onlineService: false,
    largeStorage: false,
    customizableProfile: false,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateData: (state, action) => {
      console.log(action);
      state[action.payload.property] = action.payload.value;
    },
  },
});

export const { updateData } = formSlice.actions;

export default formSlice.reducer;
