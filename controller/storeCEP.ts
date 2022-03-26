import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'CEP',
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

export const storeCEP =  counterSlice.reducer
