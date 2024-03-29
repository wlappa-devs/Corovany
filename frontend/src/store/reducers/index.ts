import {combineReducers} from "redux";
import GameState from "./GameState";
import Logs from "./Logs"
import Control from "./Control";

export const rootReducer = combineReducers({GameState, Logs, Control});

export type RootState = ReturnType<typeof rootReducer>;