
import { forwardRef, useRef, useImperativeHandle } from "react"



const FancyInput = forwardRef(function (props: any, ref: any) {
  const inputRef = useRef(null!)
  useImperativeHandle(ref, () => ({
    forceFocus () {
      (inputRef.current as any).focus()
    }
  }))

  return (
    <input type="text" ref={inputRef} />
  )
})

export default function PartC () {
  const inputRef = useRef()
  const f = () => {
    (inputRef.current as any).forceFocus()
  }
  return (
    <div>
      <h3>partC --- hooks-- useRef + useImperativeHandle 传递ref</h3>
      <button onClick={f}>input--focus</button>
      <FancyInput ref={inputRef}></FancyInput>
    </div>
  )
}