import PropTypes from "prop-types"
import React from "react"
import { Menu } from "antd"
import { CONSTANTS } from "../../utils"
import { withRouter } from "react-router"
import { connect } from "react-redux"

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current:
                props.location && props.location.pathname
                    ? props.location.pathname.split("/")[1]
                    : "home",
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.location && nextProps.location.pathname){
            const currentNav = CONSTANTS.MAIN_NAV_MENU.filter(
                (e) => e.path == nextProps.location.pathname
            )
            
            if(currentNav[0].nolink)
                this.setState({ current: currentNav[0].highlight })
            else
                this.setState({ current: nextProps.location.pathname })
        }
    }

    handleClick = (e) => {
        this.props.navigation.push({ pathname: e.key })
    }

    render() {
        const { current } = this.state
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[current]}
                mode="horizontal"
                theme="dark">
                {CONSTANTS.MAIN_NAV_MENU.map((menu) => {
                    if (!menu.nolink) {
                        const key =
                            menu.path != undefined
                                ? menu.path
                                : menu.title
                                      .replace(" ", "")
                                      .toLocaleLowerCase()
                        return (
                            <Menu.Item
                                key={key}
                                icon={menu.icon ? menu.icon : null}>
                                {menu.title}
                            </Menu.Item>
                        )
                    }
                })}
                <Menu.Item style={{ float: "right" }}>Logout</Menu.Item>
            </Menu>
        )
    }
}

NavBar.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.shape({
            split: PropTypes.func,
        }),
    }),
    navigation: PropTypes.shape({
        push: PropTypes.func,
    }),
}

function mapStateToProps(state, ownProps) {
    return {
        navigation: ownProps.router,
    }
}

export default withRouter(connect(mapStateToProps, {})(NavBar))
