import { createSlice } from "@reduxjs/toolkit";
export const modevalueSlice = createSlice({
  name: "modevalue",

  initialState: {
    Selectedmodevalue: null,
  },

  reducers: {
    SelectMail: (state, action) => {
      state.SelectedMail = action.payload;
      console.log(state.SelectedMail);
    },
  },
});

export const { SelectMail } = modevalueSlice.actions;

export const openMailBox = (state) => state.mail.SelectedMail;
// export const openMailBox = reducers.SelectMail;
export default modevalueSlice.reducer;
