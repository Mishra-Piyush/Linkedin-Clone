import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
  name: "post",
  initialState: {
    PostShow: false,
  },

  reducers: {
    openPostShow: (state) => {
      state.PostShow = true;
    },
    closePostShow: (state) => {
      state.PostShow = false;
    },
  },
});

export const { openPostShow, closePostShow } = postSlice.actions;

export const selectPostShow = (state) => state.post.PostShow;

export default postSlice.reducer;
