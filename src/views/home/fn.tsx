// 使用 react.memo 优化函数式组件 render

import { memo } from 'react'

interface FnProps {
  name: string
}

function Fn (props: FnProps) {
  console.log('Fn')
  return (
    <div>
      { props.name }
    </div>
  )
}

export default memo(Fn)