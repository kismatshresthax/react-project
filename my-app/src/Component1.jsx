import React,{memo} from 'react'


const Component1 = ({user}) => {
  return (
    <div>hello {user}</div>
  )
}



export default memo(Component1)