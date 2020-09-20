import { services, ACTION_TYPES, URLS } from "../utils"
//import cognitoServer from "../containers/Login/authService"

export const loginOrganisation = (data) => {
    return async (dispatch) => {
        dispatch({
            type: ACTION_TYPES.LOGIN_ORGANISATION,
            payload: {},
        })

        const { error, response } = await services.makeCall(
            "get",
            URLS.Login + "/" + data.email
        )
        if (response) {
            dispatch({
                type: ACTION_TYPES.LOGIN_ORGANISATION_SUCCESS,
                payload: response,
            })
        }
        if (error) {
            dispatch({
                type: ACTION_TYPES.LOGIN_ORGANISATION_FAILED,
                payload: { error: "Inavlid Email or Password" },
            })
        }
    }
}

export const login = (username, email) => {
    console.log(username)
    return async (dispatch) => {
        dispatch({
            type: ACTION_TYPES.LOGIN,
            payload: {},
        })
        // const { error, response } = await services.makeCall(
        //     "post",
        //     URLS.Login + "/" + data.email
        // )
        let response = { userid: 124, name: "some name", token:"some token"}
        let error = false
        if (response) {
            dispatch({
                type: ACTION_TYPES.LOGIN_SUCCESS,
                payload: response,
            })
        }
        if (error) {
            dispatch({
                type: ACTION_TYPES.LOGIN_FAILED,
                payload: { error: "Inavlid Email or Password" },
            })
        }
    }
}

// Sign up process

// get signUp confirmation code
export const signUp = (authenticationData, attributeList) => {
    return async (dispatch) => {
        dispatch({
            type: ACTION_TYPES.SIGN_UP,
            payload: {},
        })
        // await cognitoServer.signup(
        //     authenticationData,
        //     attributeList,
        //     (response) => {
        //         dispatch({
        //             type: ACTION_TYPES.SIGN_UP_SUCCESS,
        //             payload: response,
        //         })
        //     },
        //     (error) => {
        //         dispatch({
        //             type: ACTION_TYPES.SIGN_UP_FAILED,
        //             payload: error,
        //         })
        //     }
        // )
    }
}
// confirm signUp code
export const confirmUser = (username, code) => {
    return async (dispatch) => {
        dispatch({
            type: ACTION_TYPES.CONFIRM_USER,
            payload: {},
        })
        await cognitoServer.confirmUser(
            username,
            code,
            (response) => {
                dispatch({
                    type: ACTION_TYPES.CONFIRM_USER_SUCCESS,
                    payload: response,
                })
            },
            (error) => {
                dispatch({
                    type: ACTION_TYPES.CONFIRM_USER_FAILED,
                    payload: error,
                })
            }
        )
    }
}
