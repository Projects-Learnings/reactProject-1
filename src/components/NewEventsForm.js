import './NewEventsForm.css'
import {useRef, useState} from "react";
import {v4 as uuidv4} from 'uuid';

function GenerateUUIDFunc() {
    // const generateUUID = () => {
    //     const newUUID = uuidv4();
    //     console.log(newUUID);
    //     // Use the UUID as needed
    // }
    const generateUUID = uuidv4();
    // console.log(generateUUID);
    return generateUUID.toUpperCase()

}

export default function NewEventsForm({submit, handleClose}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const randValue = useRef()
    // const handleChange = (e) => {
    //     //console.log(e.target.value)
    //     if (e.target.value.length > 1) {
    //         setTitle(e.target.value)
    //     }
    //
    // }
    const resetForm = () => {
        setTitle('')
        setDate('')
        setLocation('Nairobi')

    }

    const submitForm = event => {
        event.preventDefault()
        let myRandVal = randValue.current.value
        console.log(title, date, myRandVal, location)
        // console.log(title, date)
        submit(title, date, myRandVal, location)
        resetForm()
        handleClose(false)
    }
    // const randomUUID = () => {
    //     GenerateUUIDFunc()
    // }

    return (
        <form className="new-event-form" onSubmit={submitForm}>
            <label htmlFor="title">Event Title:</label>
            <input type="text" id="title" onChange={(e) => {
                setTitle(e.target.value)
            }} value={title}/>
            <label htmlFor="date">Event </label>
            <input type="date" id="date" onChange={(e) => {
                setDate(e.target.value)
            }} value={date}/>
            <label htmlFor="location">Event Location:</label>
            <select name="location" id="location" onChange={(e) => {
                setLocation(e.target.value)
            }}>
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Nakuru">Nakuru</option>
                <option value="Kisumu">Kisumu</option>
            </select>

            <input type="hidden" ref={randValue} value={GenerateUUIDFunc()}/>
            {/*<p>title - {title} date -{date}</p>*/}
            <p onClick={resetForm}>Reset Form</p>
            <button>Submit</button>

        </form>
    )
}