import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { DatePicker, Select, Card } from "antd"
import { Row, Col, Button, Form, Spin, Input, Image, Divider } from "antd"
const { Option } = Select
import moment from "moment"
import "./BeltTest.scss"
const layout = {
    wrapperCol: { span: 24 },
}
const dateFormat = "YYYY/MM/DD"
const cardBodyStyle = {
    padding: 15,
}

const data = [
    {
        Title: "10 Punches",
        "Time Allowed": 4,
        Allowance: "-15% to 30%",
        "Time Obtained": "3.6S",
        "Time Difference": "-0.4S",
        "Variance in %": "-10%",
        "Grade Obtained": "4.5",
        Status: "Grade Obtained: 4.5 Very Good!",
    },
    {
        Title: "10 Punches",
        "Time Allowed": 4,
        Allowance: "-15% to 30%",
        "Time Obtained": "3.6S",
        "Time Difference": "-0.4S",
        "Variance in %": "-10%",
        "Grade Obtained": "4.5",
        Status: "Grade Obtained: 4.5 Very Good!",
    },
    {
        Title: "10 Punches",
        "Time Allowed": 4,
        Allowance: "-15% to 30%",
        "Time Obtained": "3.6S",
        "Time Difference": "-0.4S",
        "Variance in %": "-10%",
        "Grade Obtained": "4.5",
        Status: "Grade Obtained: 4.5 Very Good!",
    },
]

class BeltTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: [],
        }
    }

    componentDidMount() {}

    onFinish = (value) => {
        console.log(value)
    }
    render() {
        return (
            <div>
                <Spin size="large" spinning={false}>
                    <Row
                        gutter={[16, 24]}
                        style={{ marginBottom: 20 }}
                        type="flex"
                        align="center">
                        <Col>
                            <Form
                                {...layout}
                                layout="inline"
                                name="control-ref"
                                onFinish={this.onFinish}>
                                <Form.Item
                                    name="studentid"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Student ID cannot be empty",
                                        },
                                    ]}>
                                    <Input placeholder="Student ID" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Go
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                    <Row gutter={[16, 24]}>
                        <Col
                            align={"center"}
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 6, offset: 0 }}>
                            <img
                                style={{marginTop:10, borderRadius: "50%"}}
                                width={150}
                                height={150}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </Col>
                        <Col
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: 20,
                            }}
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 18, offset: 0 }}>
                            <Card>
                                <div>Tiwari </div>
                                <div>Green Belt</div>
                                <div>Track - MMA</div>
                                <div>GPA - ?</div>
                                <div>LAST GRADING DONE : 1st Sept, 2019</div>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[16, 24]}>
                        <Col
                            align="center"
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 6, offset: 0 }}>
                            <span style={{ marginRight: 20 }}>
                                Belt Test Date
                            </span>
                            <DatePicker
                                defaultValue={moment("2015/01/01", dateFormat)}
                                format={dateFormat}
                            />
                        </Col>
                        <Col
                            align="center"
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 6, offset: 0 }}>
                            <span style={{ marginRight: 20 }}>
                                Grading For Belt
                            </span>
                            <Select
                                placeholder="Select Belt"
                                onChange={this.handleChange}>
                                <Option value="b1">Belt 1</Option>
                                <Option value="b2">Belt 2</Option>
                            </Select>
                        </Col>
                        <Col
                            align="left"
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 6, offset: 0 }}>
                            <Button type="primary">Go</Button>
                        </Col>
                    </Row>
                    <Divider orientation="left">Result</Divider>
                    <Row gutter={[16, 24]}>
                        {data.map((d) => {
                            return (
                                <Col
                                    xs={{ span: 24, offset: 0 }}
                                    lg={{ span: 6, offset: 0 }}>
                                    <Card
                                        title={d.Title}
                                        bordered={true}
                                        bodyStyle={cardBodyStyle}
                                        className="BeltTest-paper"
                                        style={{ width: "100%" }}>
                                        <p>Time Allowed:{d["Time Allowed"]}</p>
                                        <p>Allowance:{d["Allowance"]}</p>
                                        <p>
                                            Time Obtained:{d["Time Obtained"]}
                                        </p>
                                        <p>
                                            Time Difference:
                                            {d["Time Difference"]}
                                        </p>
                                        <p>
                                            Variance in %:{d["Variance in %"]}
                                        </p>
                                        <p>
                                            Grade Obtained:{d["Grade Obtained"]}
                                        </p>
                                        <b>{d["Status"]}</b>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Spin>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state)
    return {}
}

export default withRouter(connect(mapStateToProps, {})(BeltTest))
