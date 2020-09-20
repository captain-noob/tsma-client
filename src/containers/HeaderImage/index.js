import React from "react"
//import { Menu } from "antd"
import logo from "images/logo/logo.png"

class HeaderImage extends React.Component {
    render() {
        return (
            <div
                style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <img src={logo} width={100} />
                <span
                    style={{
                        marginLeft: 20,
                        fontWeight: "bold",
                        fontSize: 20,
                    }}>
                    CLAAAASS... ALERT, CHUMBE
                </span>
            </div>
        )
    }
}

export default HeaderImage
