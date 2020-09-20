import React, { Component } from "react"
import { DatePicker, Button, Select } from "antd"
import { Row, Col, Table, Divider, Spin, Card } from "antd"
import axios from "axios"
import config, { URLS } from "../../utils/config"
const { Option } = Select
import "./Attendance.scss"
import { css, cx } from '@emotion/core'


const tableCSS = {
    margin: '40px 120px',
    backgroundColor: 'white',
    '& table': {
      borderCollapse: 'collapse'
    },
    '& thead > tr > th': {
      backgroundColor: 'darkblue',
      color: 'white',
    },
    '& thead > tr': {
      borderWidth: '2px',
      borderColor: 'yellow',
      borderStyle: 'solid'
    }
  }


const data = [
    {
        Belt: "White",
        Batch: [
            {
                name: "Batch 1",
                attendance: [
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "P",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "P",
                    },
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "A",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "A",
                    },
                ],
            },
            {
                name: "Batch 2",
                attendance: [
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "P",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "P",
                    },
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "A",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "A",
                    },
                ],
            },
        ],
    },
    {
        Belt: "Balck",
        Batch: [
            {
                name: "Batch 1",
                attendance: [
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "P",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "P",
                    },
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "A",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "A",
                    },
                ],
            },
            {
                name: "Batch 2",
                attendance: [
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "P",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "P",
                    },
                    {
                        Name: "Deepak",
                        RollNo: 153,
                        Attendance: "A",
                    },
                    {
                        Name: "Vasanth",
                        RollNo: 123,
                        Attendance: "A",
                    },
                ],
            },
        ],
    },
]

const columns = [
    {
        title: "Name",
        dataIndex: "Name",
        key: "name",
    },
    {
        title: "Role Number",
        dataIndex: "RollNo",
        key: "role",
    },
    {
        title: "Attendance",
        dataIndex: "Attendance",
        key: "attendance",
    },
]

class Attendance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: data,
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        axios
            .get(config.baseURL + URLS.attendance)
            .then((response) => {
                this.setState({ tableData: response.data, loading: false })
            })
            .catch(function () {
                //alert("Something went wrong")
                this.setState({ loading: false })
            })
    }

    onChange = (date, dateString) => {
        console.log(date, dateString)
    }
    handleChange = (value) => {
        console.log(`selected ${value}`)
    }

    render() {
        return (
            <div>
                <Spin size="large" spinning={false}>
                    <Row
                        style={{ marginBottom: 20 }}
                        type="flex"
                        align="center">
                        <Col
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 5, offset: 1 }}>
                            <DatePicker
                                onChange={this.onChange}
                                style={{ width: "100%", margin: 5 }}
                            />
                        </Col>
                        <Col
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 5, offset: 1 }}>
                            <Select
                                placeholder="Select Belt"
                                style={{ width: "100%", margin: 5 }}
                                onChange={this.handleChange}>
                                <Option value="b1">Belt 1</Option>
                                <Option value="b2">Belt 2</Option>
                            </Select>
                        </Col>
                        <Col
                            xs={{ span: 24, offset: 0 }}
                            lg={{ span: 5, offset: 1 }}>
                            <Select
                                placeholder="Select Batch"
                                style={{ width: "100%", margin: 5 }}
                                onChange={this.handleChange}>
                                <Option value="batch1">Batch 1</Option>
                                <Option value="batch2">Batch 2</Option>
                                <Option value="batch3">Batch 3</Option>
                            </Select>
                        </Col>
                        <Col
                            xs={{ span: 23, offset: 0 }}
                            lg={{ span: 5, offset: 1 }}>
                            <Button type="primary">Load Attendance</Button>
                        </Col>
                    </Row>
                    {this.state.tableData.map((d, j) => {
                        return (
                            <div key={j}>
                                {d.Batch.map((b, i) => {
                                    return (
                                        <Row key={i + " " + j}>
                                            <Col
                                                xs={{ span: 12, offset: 1 }}
                                                lg={{ span: 12, offset: 6 }}>
                                                <Divider orientation="left">
                                                    <b>{d.Belt}</b> -{" "}
                                                    <b>{b.name}</b>
                                                </Divider>
                                                <Table
                                                    columns={columns}
                                                    dataSource={b.attendance}
                                                />
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </div>
                        )
                    })}
                </Spin>
            </div>
        )
    }
}

export default Attendance
