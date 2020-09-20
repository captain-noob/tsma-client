import React, { Component } from "react"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { browserHistory } from "react-router"
import thunk from "redux-thunk"
import AppStore from "./reducers"
import Routes from "./Routes"
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux"

const configureStore = () => {
    const middleware = [routerMiddleware(browserHistory), thunk]
    const composeEnhancers =
        global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const enhancer = composeEnhancers(applyMiddleware(...middleware))
    const store = createStore(AppStore, enhancer)
    return store
}

const history = syncHistoryWithStore(browserHistory, configureStore())

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <Routes history={history} />
            </Provider>
        )
    }
}
