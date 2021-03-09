import React, { Component, forwardRef, useImperativeHandle, useContext } from "react"
import { rcContext } from './rc-context'
interface FieldType {
  name?: string,
  rules?: any[],
  children?: any,
  label?: string
}

export default class Field extends Component <FieldType, {}> {
  static contextType = rcContext

  cancelRegister = null

  // 数据改变 改变视图输入框值
  onStoreChange = () => {
    this.forceUpdate()
  }

  componentDidMount () {
    this.cancelRegister = this.context.registerField(this)
  }

  componentWillUnmount () {
    this.cancelRegister && this.cancelRegister()
  }

  render () {
    const { children, name } = this.props
    return React.cloneElement(children, {
      value: undefined,
      onChange: (e: any) => {
        const value = e.target.value
        this.context.setFieldsValue({[name]: value})
      }
    })
  }
}