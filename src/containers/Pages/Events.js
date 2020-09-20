import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { DatePicker, Select, Card } from "antd"
import {
    Row,
    Col,
    Button,
    Form,
    Spin,
    Input,
    Image,
    Divider,
    Modal,
} from "antd"
import { Table, Tag, Space } from "antd"
const { Option } = Select
import moment from "moment"
import "video-react/dist/video-react.css"
import { Player } from "video-react"
import "./Events.scss"
const layout = {
    wrapperCol: { span: 24 },
}
const dateFormat = "YYYY/MM/DD"
const cardBodyStyle = {
    padding: 15,
}

class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: [],
            videoPopupOpen: false,
        }

        this.columns = [
            {
                title: "Fight",
                dataIndex: "fight",
                key: "fight",
                fixed: "left",
            },
            {
                title: "Date",
                dataIndex: "date",
                key: "date",
            },
            {
                title: "Result",
                dataIndex: "result",
                key: "result",
            },
            {
                title: "Opponent",
                dataIndex: "opponent",
                key: "opponent",
            },
            {
                title: "Videos",
                dataIndex: "videos",
                key: "videos",
                render: (text, record) => (
                    <span size="middle">
                        {text == "yes" ? (
                            <a
                                onClick={() => {
                                    this.openPopup("hello")
                                }}>
                                View
                            </a>
                        ) : (
                            "No video"
                        )}
                    </span>
                ),
            },
            {
                fixed: "right",
                title: "Action",
                key: "action",
                render: (text, record) => (
                    <span size="middle">
                        <a>Edit</a>&nbsp;|&nbsp;
                        <a>Delete</a>
                    </span>
                ),
            },
        ]

        this.data = [
            {
                key: "1",
                fight: "Chattigharh",
                date: "25th JAN",
                result: "W",
                opponent: "XYZ Type : Offensive ",
                videos: "No",
            },
            {
                key: "2",
                fight: "Chattigharh",
                date: "25th JAN",
                result: "W",
                opponent: "XYZ Type : Offensive ",
                videos: "yes",
            },
            {
                key: "3",
                fight: "Chattigharh",
                date: "25th JAN",
                result: "W",
                opponent: "XYZ Type : Offensive ",
                videos: "Yes",
            },
        ]
    }

    openPopup = () => {
        this.setState({ videoPopupOpen: true })
    }
    componentDidMount() {}

    onFinish = (value) => {
        console.log(value)
    }
    handleOk = (e) => {
        console.log(e)
        this.setState({
            videoPopupOpen: false,
        })
    }

    handleCancel = (e) => {
        console.log(e)
        this.setState({
            videoPopupOpen: false,
        })
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
                        <Col
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <span style={{ marginRight: 20 }}>Student ID</span>
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
                    <Row style={{ border: "1px solid #CCC" }} gutter={[16, 24]}>
                        <Col
                            align={"center"}
                            style={{ borderRight: "1px solid #CCC" }}
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 6, offset: 0 }}>
                            <img
                                style={{ borderRadius: "50%" }}
                                width={200}
                                height={200}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                        </Col>
                        <Col
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 18, offset: 0 }}>
                            <div style={{ padding: 20 }}>
                                <div>Tiwari </div>
                                <div>Green Belt</div>
                                <div>Track - MMA</div>
                                <div>GPA - ?</div>
                                <div>LAST GRADING DONE : 1st Sept, 2019</div>
                            </div>
                        </Col>
                    </Row>
                    <Row
                        gutter={[16, 24]}
                        align="center"
                        style={{
                            border: "1px solid #CCC",
                            marginTop: 20,
                            marginBottom: 20,
                        }}>
                        <Col
                            align="center"
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 6, offset: 0 }}>
                            <b style={{ marginRight: 20 }}>Total: 3</b>
                        </Col>
                        <Col
                            align="center"
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 6, offset: 0 }}>
                            <b style={{ marginRight: 20 }}>Wins: 2</b>
                        </Col>
                        <Col
                            align="center"
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 6, offset: 0 }}>
                            <b style={{ marginRight: 20 }}>Losses: 1</b>
                        </Col>
                    </Row>
                    <Divider orientation="left">
                        <Button
                            type="primary"
                            onClick={() => {
                                this.props.navigation.push({
                                    pathname: "addevents",
                                })
                            }}>
                            Add Events
                        </Button>
                    </Divider>

                    <Row
                        gutter={[16, 24]}
                        style={{ marginTop: 20 }}
                        align="center">
                        <Table
                            className="Events-paper"
                            columns={this.columns}
                            dataSource={this.data}
                            scroll={{ x: "calc(700px + 50%)", y: 240 }}
                        />
                        {/* <Table columns={columns} dataSource={data} size="middle" /> */}
                    </Row>
                    <Modal
                        title="Video Player"
                        visible={this.state.videoPopupOpen}
                        onCancel={this.handleOk}
                        okButtonProps={{ style: { display: "none" } }}
                        cancelButtonProps={{ style: { display: "none" } }}>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        </Player>
                    </Modal>
                </Spin>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state, ownProps)
    return {
        navigation: ownProps.router,
    }
}

export default withRouter(connect(mapStateToProps, {})(Events))
