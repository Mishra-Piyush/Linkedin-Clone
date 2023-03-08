import { createSlice } from "@reduxjs/toolkit";
export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    ProfileShow: false,
  },

  reducers: {
    openProfileShow: (state) => {
      state.ProfileShow = true;
    },
    closeProfileShow: (state) => {
      state.ProfileShow = false;
    },
  },
});

export const { openProfileShow, closeProfileShow } = profileSlice.actions;

export const selectProfileShow = (state) => state.profile.ProfileShow;

export default profileSlice.reducer;
