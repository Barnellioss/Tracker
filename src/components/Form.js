import moment from 'moment'
import React, { useState } from 'react'
import { Input } from 'antd';
import 'antd/dist/antd.css';
import '../styles/index.scss'



const Form = (props) => {

  const [value, setValue] = useState('')
  let date = moment().format("DD MM YYYY, HH:mm:ss")

  const submitHandler = (event) => {
    event.preventDefault()

    if (value.trim()) {
      props.createNote(value.trim())
      setValue('')
    }
    else {
      props.createNote(date)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <Input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          className="form-control"
          placeholder='Enter Note' />
      </div>
    </form>
  )
}

export default Form;

