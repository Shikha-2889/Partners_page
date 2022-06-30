import React from "react";
import { Button, Drawer, Form, Col, Row, Input, Switch, Divider, ProfImg, Tooltip, Space, Select, DatePicker, Upload, Modal } from 'antd'
import { ExclamationCircleFilled, EyeTwoTone, UploadOutlined } from '@ant-design/icons';

import 'antd/dist/antd.min.css'

const { Option } = Select

export default class StudentDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            data: {},
            confirmLoading: false
        }
    }

    showDrawer = () => {
        this.setState({
            visible: true
        })
        console.log(this.state.visible)
    }

    handleOk = () => {
        this.setState({
            confirmLoading: true
        })
        alert("Submitted Succesfully")
    }

    onClose = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        if (this.props.btn == "Add Student") {
            var title = "Add New Student"
            var btn = (<Button type="primary" onClick={this.showDrawer} >
                Add Student
            </Button>)
        } else {
            var title = "Student Details (ID:" + this.props.idValue + ")"
            var btn = (<Tooltip title="View/Edit"><Button type="link" onClick={this.showDrawer}><EyeTwoTone /></Button></Tooltip>)
        }
        return (
            <>
                {btn}

                <Drawer
                    title={title}
                    width="55%"
                    visible={this.state.visible}
                    closable={true}
                    onClose={this.onClose}

                >
                    <Form
                        name="Studentbasic"
                        labelCol={{
                            span: 10,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        onFinish={this.handleOk}>

                        <Form.Item name="upload" label="Upload">
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>


                        <div className="col-6">

                            <Col>

                                <Form.Item
                                    name="first_name"
                                    label="First Name"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter the First Name'
                                        },
                                        {
                                            max: 30,
                                            message: 'name cannot exceed 30 characters ',
                                        },
                                        {
                                            whitespace: true
                                        }
                                    ]}>
                                    <Input />
                                </Form.Item>
                            </Col>


                        </div>



                        <Form.Item
                            name="last_name"
                            label="Last Name"
                            hasFeedback
                            rules={[{
                                required: true,
                                message: 'Please Enter the last Name'
                            },
                            {
                                max: 30,
                                message: 'name cannot exceed 30 characters',
                            },
                            {
                                whitespace: true
                            }
                            ]}>
                            <Input />
                        </Form.Item>



                        <Form.Item
                            name="user_name"
                            label="Registered Mobile"
                            hasFeedback
                            rules={[{
                                required: true,
                                message: "Please enter a valid mobile number"
                            }]}>
                            <Input />
                        </Form.Item>


                        <Form.Item
                            name="email"
                            label="Email"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your email id"
                                },
                                {
                                    type: 'email',
                                    message: "The input is not valid email"
                                }
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="dob"
                            label="Date of Birth">
                            <DatePicker picker="date" />
                        </Form.Item>
                        <Form.Item
                            name="current_class"
                            label="Current Class"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter the current class!',
                                },
                            ]}
                        >
                            <Select placeholder="Select a class">
                                <Option key="7" value="7">7</Option>
                              
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="address"
                            label="Address"
                            rules={[{
                                max: 500,
                                message: 'address cannot exceed 500 characters'
                            }

                            ]}
                            labelCol={{
                                span: 5,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}>

                            <Input.TextArea />
                        </Form.Item>

                        <Form.Item
                            name="enrld_on"
                            label="Enrolled On"
                        >
                            <Input disabled={true} />
                        </Form.Item>

                        <Form.Item
                            name="status"
                            label="Is Active"
                            valuePropName="checked"
                        >
                            <Switch />
                        </Form.Item>
                        <Divider orientation="left">Guardian Details</Divider>



                        <Form.Item
                            label="Relation">
                            <Select>
                                <Option key="1" value="1">Father</Option>
                                <Option key="2" value="2">Mother</Option>
                                <Option key="3" value="3">Brother</Option>
                                <Option key="4" value="4">Sister</Option>
                                <Option key="5" value="5">Other</Option>
                            </Select>
                        </Form.Item>
                    

                        <Form.Item
                            name="p_name"
                            label="Full Name"
                            rules={[{
                                max: 256,
                                message: 'cannot exceed more than 256 characters'
                            }

                            ]}>
                            <Input />

                        </Form.Item>

                        <Form.Item
                            name="p_mobile"
                            label="Mobile">
                            <Input />
                        </Form.Item>


                        <Form.Item
                            name="p_email"
                            label="Email Id">
                            <Input />
                        </Form.Item>

                        <Divider />

                        <Row justify="end">
                            <Space size="large">
                                <Button type="primary" htmlType="submit" style={{ marginLeft: 'auto' }} >Save</Button>
                                <Button onClick={this.onClose} danger>Cancel</Button>
                            </Space>
                        </Row>


                    </Form>
                    <Modal
                        title="Are you sure?"
                    ></Modal>
                </Drawer>
            </>
        )
    }
}
