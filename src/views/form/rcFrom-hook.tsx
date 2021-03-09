import React, { Component, useEffect, useRef } from "react"
import { Input, Button } from "antd"
// import Form, { Field } from 'rc-field-form'
import Form, { Field } from './components/index'
const nameRules = { required: true, message: "请输⼊入姓名!" }
const passworRules = { required: true, message: "请输⼊入密码!" }


export default function RcHookForm(props) {
  const [form] = Form.useForm();
  const formRef = useRef()
  console.log('useForm', form)
  const onFinish = val => {
    console.log("onFinish", val); //sy-log
  };
  const onFinishFailed = val => {
    console.log("onFinishFailed", val); //sy-log
  };
  const onReset = () => {
    form.resetFields();
  };
  
  useEffect(() => {
    form.setFieldsValue({name: "default"}) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <h3>rcForm - hook</h3>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={onReset}
        ref={formRef} >
        <Field label="姓名" name="name" rules={[nameRules]}>
          <Input placeholder="name input placeholder" />
        </Field>
        <Field label="密码" name="password" rules={[passworRules]}>
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
  )
}