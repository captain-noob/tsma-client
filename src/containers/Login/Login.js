import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { Form, Input, Icon, Button, Checkbox, Col, Row, Layout } from "antd"
import HeaderImage from "../HeaderImage"
import { login } from "../../actions"
import "./loginstyles.scss"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
}
const tailLayout = {
    wrapperCol: { offset: 0, span: 12 },
    align: "center",
}

const cardStyle = {
    borderRadius: "16px",
    padding: 30,
    boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
}

class Login extends Component {
    handleSubmit = (values) => {
        console.log("Success:", values)
        this.props.login(values)
    }

    onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (
            nextProps.UserLogin.status == "success" &&
            nextProps.UserLogin.status != this.props.UserLogin.status
        ) {
            console.log("Success")
            this.props.navigation.push({
                pathname: "attendance",
            })
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form

        return (
            <Row
                type="flex"
                justify="center"
                align="top"
                style={{ minHeight: "100vh" }}>
                <Col
                    align="center"
                    xs={{ span: 18, offset: 1 }}
                    sm={{ span: 6, offset: 1 }}>
                    <HeaderImage />
                    <div style={{ height: 20 }} />
                    <Row style={cardStyle}>
                        <Col
                            align="center"
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 16, offset: 4 }}>
                            <Form
                                onSubmit={this.handleSubmit}
                                className="login-form">
                                <Form.Item>
                                    {getFieldDecorator("username", {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    "Please input your username!",
                                            },
                                        ],
                                    })(
                                        <Input
                                            prefix={
                                                <Icon
                                                    type="user"
                                                    style={{
                                                        color:
                                                            "rgba(0,0,0,.25)",
                                                    }}
                                                />
                                            }
                                            placeholder="Username"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator("password", {
                                        rules: [
                                            {
                                                required: true,
                                                message:
                                                    "Please input your Password!",
                                            },
                                        ],
                                    })(
                                        <Input
                                            prefix={
                                                <Icon
                                                    type="lock"
                                                    style={{
                                                        color:
                                                            "rgba(0,0,0,.25)",
                                                    }}
                                                />
                                            }
                                            type="password"
                                            placeholder="Password"
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {/* {getFieldDecorator("remember", {
                                valuePropName: "checked",
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)} */}

                                    {/* <a className="login-form-forgot" href="">
                                Forgot password
                            </a> */}
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button">
                                        Log in
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}
const WrappedLoginForm = Form.create({ name: "normal_login" })(Login)

function mapStateToProps(state, ownProps) {
    console.log(state)
    return {
        UserLogin: state.UserReducer.login,
        navigation: ownProps.router,
    }
}

export default withRouter(
    connect(mapStateToProps, {
        login,
    })(WrappedLoginForm)
)
