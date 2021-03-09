import { useRef } from "react"

interface FieldData {
  name: string,
  value: any
}

class FormStore {
  store = {}
  fields = []

  constructor () {
    this.store = {}
    this.fields = []
  }

  setFieldsValue = (data: FieldData) => {
    this.store = {
      ...this.store,
      ...data
    }
    console.log(this.store, 'this.store')
    this.fields.forEach((field) => {
      if (Object.keys(data).includes(field.props.name)) {
        field.onStoreChange()
      }
    })

  }

  registerField = (field) => {
    console.log('this', this)
    this.fields.push(field)

    return () => {
      this.fields = this.fields.filter(f => f !== field)
      delete this.store[field.props.name]
    }
  }

  submit = () => {
    // this.validate()
    console.log(this.store)
  }

  validate () {

  }

  getForm = () => {
    return {
      registerField: this.registerField,
      setFieldsValue: this.setFieldsValue,
      submit: this.submit
    }
  }

}

export default (formInstance?) => {
  // const formRef: any = useRef()
  // if (!formRef.current) {
  //   if (formInstance) {
  //     formRef.current = formInstance
  //   } else {
  //     const formStore = new FormStore()
  //     formRef.current = formStore.getForm()
  //   }
  // }
  // return [formRef.current]
  if (formInstance) {
    return [formInstance]
  }
  return [new FormStore().getForm()]
}