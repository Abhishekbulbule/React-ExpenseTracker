import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../redux-slicers/userSlice";


export const store = configureStore({
    reducer:userSlice
})