import React from 'react'

const Main = (props) => {
    console.log(props.name);
    
  return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}

export default Main