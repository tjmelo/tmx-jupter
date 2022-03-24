import { configureStore } from '@reduxjs/toolkit'
import { storeCEP } from '../controller/storeCEP'

export const store = configureStore({
  reducer: {
      CEP: storeCEP
  },
})