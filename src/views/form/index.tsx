import React from "react"
import ClassForm from "./classForm"
import HookForm from "./hookForm"
import RcFormClass from "./rcFrom-class"
import RcFormHook from "./rcFrom-hook"




 
export default function Form() {
  return (
    <>
      <ClassForm></ClassForm>
      <HookForm></HookForm>
      {/* <RcFormClass></RcFormClass> */}
      <RcFormHook></RcFormHook>
    </>
  )
}
  