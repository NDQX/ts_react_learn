import React, { Component, useEffect } from "react"
import { Input, Button } from "antd"
// import Form, { Field } from 'rc-field-form'
import Form, { Field } from './components/index'
const nameRules = { required: true, message: "请输⼊入姓名!" }
const passworRules = { required: true, message: "请输⼊入密码!" }

export default class RcForm extends Component {
  formRef: any = React.createRef();
  
  componentDidMount() {
    this.formRef.current.setFieldsValue({ name: "default" })
  }
  onReset = () => {
    this.formRef.current.resetFields()
  };
  onFinish = val => {
    console.log("onFinish", val); //sy-log
  };
  onFinishFailed = val => {
    console.log("onFinishFailed", val); //sy-log
  };
  render() {
    console.log("AntdFormPage render", this.formRef.current); //sy-log
    return (
      <div>
        <h3>rcForm-class </h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          onReset={this.onReset}>
          <Field  name="name" rules={[nameRules]}>
            <Input placeholder="name input placeholder" />
          </Field>
          <Field name="password" rules={[passworRules]}>
            <Input placeholder="password input placeholder" />
          </Field>
          <Field>
            <Button type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </Field>
          <Field>
            <Button type="default" size="large" htmlType="reset">
              Reset
            </Button>
          </Field>
        </Form>
      </div>
    );
  }
}
