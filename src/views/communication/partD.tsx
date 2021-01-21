import { useContext } from 'react'
import { GoodsContext } from '../../utils/context'

export default function PartD () {
  const { value, dispatch } = useContext(GoodsContext)
  return (
    <div>
      <div>useReducer useContext 传递dispatch</div>
      <div>context:{ JSON.stringify(value) }</div>
      <button onClick={ () => dispatch() } >dispatch</button>
    </div>
  )
}