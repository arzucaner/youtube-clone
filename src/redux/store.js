import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


let initialState = {

}

let reducers = combineReducers({

})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))


export default store;