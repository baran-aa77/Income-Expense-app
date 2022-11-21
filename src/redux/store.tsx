import MoneySlice from "./slice/MoneySlice";
import {configureStore} from "@reduxjs/toolkit";
export const store=configureStore(
    {
        reducer:{
            money:MoneySlice
        }
    }
)