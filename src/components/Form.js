import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'


export const Form = () => {

    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = (event) => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
              alert.show('Note has been created', 'success')
            }).catch(() => {
              alert.show('Something went wrong', 'danger')
            })
            setValue('')
          }       
          else {
            alert.show('Enter note')
          }
        }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    className="form-control bg-dark text-white"
                    placeholder='Enter Note' />
            </div>
        </form>
    )
}