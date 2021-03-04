import React, { useContext, useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Notes = ({ notes, onRemove }) => {

    const [value, setDanger] = useState('')
    const alert = useContext(AlertContext)

    if (value.trim()) {
        onRemove(value).then(() => {
            alert.show('Note has been deleted', 'danger')
        })
        setDanger('')
    }

    return (
        <TransitionGroup className="list-group" component={'ul'}>
            {notes.map(note => (
                <CSSTransition classNames={'note'} timeout={800} key={note.id}>
                    <li key={note + 1} className="list-group-item note bg-dark">
                        <div className="d-flex aligh-items-center form-check">
                            <input className="form-check-input big-checkbox" type="checkbox" value="" id={note.id} />
                            <label htmlFor={note.id} className="text-white mr-3 fs-4 fw-normal font-Segoe-UI label">{note.title}</label>
                            <label htmlFor={note.id} className="text-white mr-1 font-Segoe-UI label">{note.date}</label>
                        </div>
                        <button onClick={() => setDanger(note.id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
}