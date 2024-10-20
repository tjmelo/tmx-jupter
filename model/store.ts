import { configureStore } from '@reduxjs/toolkit'
import { storeZipCode } from '../controller/storeZipCode'

export const store = configureStore({
  reducer: {
      zipCode: storeZipCode
  },
})
