import React from 'react'
interface Props{
    nameJob: string
}
export default function Job(props:Props) {
    console.log(22222,props);
    
  return (
    <div>
        { props.nameJob}
    </div>
  )
}
