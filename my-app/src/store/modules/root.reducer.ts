import { combineReducers } from "@reduxjs/toolkit";
import personagensReducer from "./personagens/personagens.slice";

const rootReducer = combineReducers({
  personagens: personagensReducer,
});

export default rootReducer;