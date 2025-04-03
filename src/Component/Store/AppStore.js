import { configureStore } from "@reduxjs/toolkit";
import FormReducer from "./FormSlice"

const AppStore = configureStore({
    reducer: FormReducer
})
export default AppStore;