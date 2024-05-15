import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookmarks: [],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmark(state, action) {
      state.bookmarks.push(action.payload);
    },
    removeBookmark(state, action) {
      state.bookmarks = state.bookmarks.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

const store = configureStore({
  reducer: {
    bookmarks: bookmarksSlice.reducer,
  },
});

export default store;
