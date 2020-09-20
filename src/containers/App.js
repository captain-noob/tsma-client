import PropTypes from "prop-types"
import React from "react"
import HeaderImage from "./HeaderImage"
import NavBar from "./NavBar"
import { withRouter } from "react-router"
import { Layout, Breadcrumb, Row, Col, Footer } from "antd"
//const { Header, Footer, Content } = Layout
import "./App.scss"
import { CONSTANTS } from "../utils"
function MiniDrawer(props) {
    //const [open, setOpen] = React.useState(false)

    // const handleDrawerOpen = () => {
    //     setOpen(true)
    // }

    // const handleDrawerClose = () => {
    //     setOpen(false)
    // }
    console.log(">>", props)
    let pageName = ""
    try {
        const navArr = CONSTANTS.MAIN_NAV_MENU.filter(
            (e) => e.path == props.location.pathname
        )
        pageName = navArr[0] ? navArr[0].title : ""
    } catch (E) {
        pageName = ""
    }
    return (
        <Layout>
            <HeaderImage />
            <NavBar />
            <Layout>
                <Col lg={24}>
                    <Breadcrumb style={{ margin: "16px 10px" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {pageName}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        className="site-layout-content"
                        style={{ height: "calc(100vh - 55px)" }}>
                        {props.children}
                    </div>{" "}
                </Col>
            </Layout>
            {/* <div>Footer</div> */}
        </Layout>
    )
}

MiniDrawer.propTypes = {
    children: PropTypes.any,
}

export default withRouter(MiniDrawer)
