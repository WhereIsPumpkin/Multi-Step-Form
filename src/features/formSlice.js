import { createSlice } from "@reduxjs/toolkit";
import set from "lodash/set";

const initialState = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
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
      set(state, action.payload.property, action.payload.value);
    },
  },
});

export const { updateData } = formSlice.actions;

export default formSlice.reducer;
