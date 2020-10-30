import { configureStore } from "@reduxjs/toolkit";
import MetaData from "./reducers/_metadata";
import counterReducer from "../features/counter/counterSlice";
import godownsReducer from "../features/godowns/_redux";

export default configureStore({
  reducer: {
    counter: counterReducer,
    MetaData,
    godowns: godownsReducer,
  },
});
