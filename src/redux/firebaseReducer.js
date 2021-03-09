import axios from 'axios'
import moment from 'moment';
import { ADD_NOTE, FETCH_NOTES, REACT_APP_DB_URL, REMOVE_NOTE, RESUME_TIMER, STOP_TIMER, RESET_TIMER } from './types'

let initialState = {
    notes: [],
    id: 0,
}

const url = REACT_APP_DB_URL;


const firebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: return {
            ...state,
            notes: [...state.notes, action.payload]
        }
        case FETCH_NOTES: return {
            ...state,
            notes: action.payload,
        }
        case REMOVE_NOTE: return {
            ...state,
            notes: state.notes.filter(note => note.id != action.id),
        }
        case STOP_TIMER: return {
            ...state,
            note: { ...action.payload }
        }
        case RESUME_TIMER: return {
            ...state,
            note: { ...action.payload }
        }
        case RESET_TIMER: return {
            ...state,
            note: { ...action.payload }
        }
        default:
            return state
    }
}



export const fetchNotes = () => {
    return async (dispatch) => {
        const res = await axios.get(`${url}/notes.json`)
        const payload = Object.keys(res.data || {}).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({ type: FETCH_NOTES, payload })/***/
    }
}

export const stopTimer = (id, value) => {
    return async (dispatch) => {
        const res = await axios.get(`${url}/notes/${id}.json`)
        let note = res.data
        const payload = { ...note, startStop: [{ date: Date.now(), stopped: true, timerValue: value }] }
        await axios.put(`${url}/notes/${id}.json`, payload)
        dispatch({ type: STOP_TIMER, payload })
    }
}

export const resumeTimer = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`${url}/notes/${id}.json`)
        let note = res.data
        const payload = { ...note, startStop: [{ timerValue: note.startStop[0].timerValue, stopped: false, date: Date.now() }] }
        await axios.put(`${url}/notes/${id}.json`, payload)
        dispatch({ type: RESUME_TIMER, payload })
    }
}


export const resetTimer = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`${url}/notes/${id}.json`)
        let note = res.data
        const payload = { ...note, startStop: [{ timerValue: 0, stopped: true, date: Date.now() }] }
        await axios.put(`${url}/notes/${id}.json`, payload)
        dispatch({ type: RESET_TIMER, payload })
    }
}



export const addNote = (title) => {
    return async (dispatch) => {
        const note = {
            title, date: moment().format("DD MM YYYY, HH:mm:ss"), startStop: [{ stopped: false, timerValue: 0, date: Date.now() }]
        }
        const res = await axios.post(`${url}/notes.json`, note)
        const payload = {
            ...note,
            id: res.data.name
        }
        dispatch({ type: ADD_NOTE, payload })
    }
}

export const removeNote = (id) => {
    return async (dispatch) => {
        await axios.delete(`${url}/notes/${id}.json`)
        dispatch({ type: REMOVE_NOTE, id })
    }
}


export default firebaseReducer;

