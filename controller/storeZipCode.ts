import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'ZipCode',
  initialState: {
    value: null,
  },
  reducers: {
    store: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { store } = counterSlice.actions

export const storeZipCode =  counterSlice.reducer
