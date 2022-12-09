import {combineReducers} from "redux";
import { cartreducer } from "../reducers/cartReducers"


const rootreducer = combineReducers({
    cartreducer,
});


export default rootreducer;