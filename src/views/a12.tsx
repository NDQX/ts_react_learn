import { useState, useEffect, useContext } from 'react'
import { AboutContext } from './about'

// interface Props1 {
// }

export default function A12 (props: any) {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(1)
  const context = useContext(AboutContext)

  useEffect(()=> {
    console.log('mounted')
    return () => {
      console.log('unMounted')
    }
  }, [])

  useEffect(() => {
    console.log('update')
    console.log(context, 'context')
  })

  useEffect(() => {
    console.log('watchState1--immediate-TRue')
  }, [state1])

  useEffect(() => {
    console.log('watchState2--immediate-TRue')
  }, [state2])


  return (
    <div>
      <br></br>
      A12
      <p>{state1}</p>
      <button onClick={() => setState1(state1 + 1)}>b+1</button>
      <button onClick={() => setState2(state2 + 1)}>c+1</button>
      { props.children }
    </div>
  )
}