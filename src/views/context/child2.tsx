import { useContext } from 'react';
import { TmpContext } from './context';


const Child2 = () => {
  const context = useContext(TmpContext)
  return (
    <div>
      useContext-----: { JSON.stringify(context) }    
    </div>
  );
}

export default Child2;
