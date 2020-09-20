import ip from "icepick"
import { ACTION_TYPES } from "../utils"

const initialState = ip.freeze({
    login: {
        status: "",
        response: {}
    }
})

export default function UserLogin(state = initialState, action) {
    switch (action.type) {
    case ACTION_TYPES.LOGIN: {
        state = ip.setIn(state, ["login", "status"], "started")
        return state
    }
    case ACTION_TYPES.LOGIN_SUCCESS: {
        localStorage.setItem("token", action.payload.token)
        state = ip.setIn(state, ["login", "status"], "success")
        return state
    }
    case ACTION_TYPES.LOGIN_FAILED: {
        state = ip.setIn(state, ["login", "status"], "failed")
        return state
    }
    default:
        return state
    }
}
