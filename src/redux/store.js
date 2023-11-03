import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


let initialState = {

}

let reduces = combineReducers({

})

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))