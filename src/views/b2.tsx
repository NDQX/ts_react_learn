import { useContext } from 'react'
import { V2Context } from './view2'

function B2 () {
  const Context: any = useContext(V2Context)
  return (
    <div>
      <p>
       --------- { Context.state.count }
      </p>
      <button onClick={ () => Context.countDispatch({ type: 'add' }) }>add</button>
    </div>
  )
}

export default B2