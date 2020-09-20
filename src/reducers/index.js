import { combineReducers } from "redux"
//import { CONSTANTS } from "../utils"
import { routerReducer } from "react-router-redux"
import { reducer as formReducer } from "redux-form"
import UserReducer from "./UserReducer"
import dashboard from "./dashboard"

const appReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    dashboard,
    UserReducer,
})

export default appReducer
