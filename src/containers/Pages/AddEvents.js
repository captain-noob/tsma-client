import React, { Component } from "react"
import { Form, Input, InputNumber, Button, DatePicker, Upload } from "antd"
import { UploadOutlined, InboxOutlined } from "@ant-design/icons"
import { connect } from "react-redux"
import { withRouter } from "react-router"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
}

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not validate email!",
        number: "${label} is not a validate number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
}

class AddEvents extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onFinish = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            console.log("Received values of form: ", values)
        })
    }

    normFile = (e) => {
        console.log("Upload event:", e)
        if (Array.isArray(e)) {
            return e
        }
        return e && e.fileList
    }

    render() {    const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Form
                    {...layout}
                    name="nest-messages"
                    onSubmit={this.onFinish}
                    validateMessages={validateMessages}>
                    <Form.Item
                        name={"event.fight_type"}
                        label="Fight Type"
                        rules={[{ required: true }]}>
                        {getFieldDecorator("event.fight_type", {
                            rules: [
                                {
                                    required: true,
                                    message: "Required!",
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item
                        name={["event", "fight_name"]}
                        label="Fight Name">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["event", "fight_date"]}
                        label="Fight Date">
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name={["event", "city"]} label="City">
                        <Input />
                    </Form.Item>
                    <Form.Item name={["event", "state"]} label="State">
                        <Input />
                    </Form.Item>
                    <Form.Item name={["event", "country"]} label="Country">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["event", "opponent_name"]}
                        label="Opponent Name">
                        <Input />
                    </Form.Item>
                    <Form.Item name={["event", "result"]} label="Result">
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={this.normFile}
                        extra="Select event video file">
                        <Upload
                            name="logo"
                            action="/upload.do"
                            listType="picture">
                            <Button icon={<UploadOutlined />}>
                                Click to upload
                            </Button>
                        </Upload>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ ...layout.wrapperCol }}
                        align="center">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button
                            style={{ marginLeft: 10 }}
                            onClick={(e) => {
                                this.props.form.resetFields()
                            }}>
                            Clear
                        </Button>
                        <Button
                            align="right"
                            style={{ marginLeft: 10 }}
                            onClick={(e) => {}}>
                            Go to event list
                        </Button>
                    </Form.Item>
                </Form>
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

const WrappedAdvancedSearchForm = Form.create({ name: "advanced_search" })(
    AddEvents
)

export default WrappedAdvancedSearchForm //withRouter(connect(mapStateToProps, {})(AddEvents))
