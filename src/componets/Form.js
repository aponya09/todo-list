import React, { useState } from 'react'

const Form = (props) => {
    const [rest, setRest] = useState('')
    const inpHandler =(e)=>{
        setRest(e.target.value)
    }
    const addHandler = ()=>{
    const products = {
        name: rest
    }
    props.onGetSomm(products)
    }
  return (
    <div>
        <input onChange={inpHandler}></input>
        <button onClick={addHandler}>ADD</button>
    </div>
  )
}

export default Form