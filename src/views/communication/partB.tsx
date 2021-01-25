import { useState, useEffect, useContext } from 'react'
import { CommunicationContext } from '../../utils/context'

// interface Props1 {
// }

export default function PartB (props: any) {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(1)
  const context = useContext(CommunicationContext)

  useEffect(()=> {
    console.log('mounted')
    return () => {
      console.log('unMounted')
    }
  }, [])

  useEffect(() => {
    console.log('update')
  })

  useEffect(() => {
    console.log('watchState1--immediate-TRue')
  }, [state1])

  useEffect(() => {
    console.log('watchState2--immediate-TRue')
  }, [state2])


  return (
    <div className='partB'>
      <h5>PartB--- hooks使用useContext</h5>
      
      <p>{state1}</p>
      <button onClick={() => setState1(state1 + 1)}>孙按钮2</button>
      <button onClick={() => setState2(state2 + 1)}>c+1</button>
      <div>
        context-- { JSON.stringify(context) }
      </div>
      { props.children }
    </div>
  )
}