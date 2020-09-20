var config = {}
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV == "production") {
    config = {
        baseURL:
            window.location.port != ""
                ? window.location.protocol +
                  "//" +
                  window.location.hostname +
                  ":" +
                  window.location.port
                : window.location.protocol + "//" + window.location.hostname,
    }
} else {
    config = {
        baseURL: "http://localhost:8080",
    }
}

export default config

export const URLS = {
    attendance: "/api/attendance",
}
