
import { useRef } from "react"


export default function PartB () {

  const inputRef = useRef<HTMLInputElement>(null)
  const btnClick = () => {
    console.log(inputRef, 'inputRef')
    console.log(inputRef.current && inputRef.current.value )
  }

  return (
    <div>
      <h3>partB --- hooks-- useRef</h3>
      <input ref={ inputRef } />
      <button onClick={ btnClick }>useRefBtn</button>
    </div>
  )
}