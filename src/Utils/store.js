import { configureStor, configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatslice from "./chatslice";

const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatslice,
    }
});
export default store;