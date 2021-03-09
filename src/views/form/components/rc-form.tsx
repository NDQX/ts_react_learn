import React, { forwardRef, useImperativeHandle } from "react"
import { rcContext } from './rc-context'
import useForm from './useForm'

export interface FcPropType {
  onFinish? : Function,
  onFinishFailed? : Function,
  onReset? : Function,
  children?: any,
  form?: any
}



const Form = forwardRef((props: FcPropType, ref: React.Ref<any>) => {
  const [formInstance] = useForm(props.form)
  console.log('Formref', ref)
  useImperativeHandle(ref, () => (
    formInstance
  ))

  return (
    <form onSubmit={ e => {
      e.preventDefault()
      e.stopPropagation()
      console.log(formInstance)
      formInstance.submit()
    }}>
      <rcContext.Provider value={formInstance} >
        { props.children }
      </rcContext.Provider>
    </form>
  )
})

export default Form
