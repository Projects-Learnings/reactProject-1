import './App.css';
import React, {useState} from 'react'
import Title from './components/Title'
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventsForm from "./components/NewEventsForm";

//import id from "ajv/lib/vocabularies/core/id";

function App() {


    //const [name, setName] = useState('mario')
    const [currentValue, setCurrentValue] = useState(0)
    const [events, setEvents] = useState([])
    const [showEvents, setShowEvents] = useState(true)
    console.log(showEvents)
    const handleClick = (title, date, randomVal, location) => {
        console.log(title, date, randomVal, location)
        setCurrentValue(currentValue + events.length + 1)
        console.log(currentValue)

        events.push({title: title, location, createdOn: date, id: events.length + 1})
        // console.log("new id is:", newId, events.length)
    }
    const handleClickB = (id) => {
        console.log(id)
        setEvents((prevState) => (events.filter((e) => {
            return e.id !== id
        })))
    }
    let titleInfo = {title: "My website title", subtitle: "Juma's website subtitle"}
    const [showModalClose, setShowModalClose] = useState(false)
    const handleClose = () => {
        setShowModalClose(false)
        console.log("close called")
    }

    return (<div className="App">


        <Title title={titleInfo}/>
        <h1> Event List for activities around Juma</h1>
        <div>
            {/*<button onClick={handleClick}>Add to list</button>*/}
            {(showEvents && <button onClick={() => {
                setShowEvents(false)
            }}>Hide Events
            </button>)}
            {!showEvents && <button onClick={() => {
                setShowEvents(true)
            }}>Show Events
            </button>}
        </div>


        {showEvents && events.length > 0 && (<EventList e={events} handleCli={handleClickB}/>)}
        {!showModalClose && <button onClick={() => {
            setShowModalClose(true)
        }}>Add New Event</button>}

        {showModalClose && <Modal>
            {/*<h2>Terms and Conditions</h2>*/}
            {/*<p>User agrees to use service responsibly. Company not liable for damages. No illegal activities. Updates may occur. Privacy policy applies. Subject to change.</p>*/}

            <NewEventsForm submit={handleClick} handleClose={handleClose}/>
        </Modal>}

    </div>);
}

export default App;
