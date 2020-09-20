import axios from "axios"
import querystring from "querystring"
import config, { azureURL } from "./config"
import "whatwg-fetch"

const getAuthOptions = (
    method,
    parturl,
    data = {},
    queryParams = {},
    mediaType
) => {
    let url = `${config.baseURL}${parturl}`
    //const authOptions = {}
    const headers = {}

    const accessToken = localStorage.getItem("accessToken")
    const idToken = localStorage.getItem("idToken")
    const authItems = "accessToken=" + accessToken + "&idToken=" + idToken
    const params = querystring.stringify(queryParams)
    if (Object.keys(params).length > 0) {
        url = `${url}?${params}&${authItems}`
    } else {
        url = `${url}?${authItems}`
    }
    if (method === "post" || method === "put") {
        if (mediaType === "file") {
            headers["accept"] = "text/html"
            headers["content-type"] = "multipart/form-data"
        }
        return {
            headers,
            method,
            url,
            data,
        }
    } else if (method === "get") {
        return {
            method,
            url,
            data,
        }
    } else {
        return {
            method,
            url: `${url}`,
            data,
        }
    }
}

const runAxios = (authOptions) => {
    return axios(authOptions)
        .then((response) => {
            // if(__dev__)
            return { error: null, response: response.data }
        })
        .catch((error) => {
            // if(__dev__)
            if (error.response) {
                return { error: error.response, response: null }
            }
        })
}

export default {
    // azureAuthenticate: (data) => {
    //     const queryParams = querystring.stringify(data)
    //     let authOptions = {
    //         method: "get",
    //         url: `${azureURL}?${queryParams}`,
    //         headers: {
    //             "Access-Control-Allow-Origin": "*",
    //             crossOrigin: true,
    //         },
    //         json: true,
    //     }
    //     return axios(authOptions)
    //         .then((response) => {
    //             return { error: null, response: response.data }
    //         })
    //         .catch((error) => {
    //             if (error.response) {
    //                 return { error: error.response, response: null }
    //             }
    //         })
    // },
    makeCall: (method, url, data = {}, queryParams = {}) => {
        const authOptions = getAuthOptions(method, url, data, queryParams)
        return runAxios(authOptions)
    },
}
