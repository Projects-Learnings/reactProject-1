import ReactDom from 'react-dom';
import './Modal.css'

export default function Modal({children}) {
    return ReactDom.createPortal((
        <div className="modal-backdrop">
            <div className="modal" style={{
                border:"4px solid",
                borderColor:"#ff4500",
                textAlign:"Centre"
            }}>
                {children}
                {/*<button onClick={handleClose}>Close Me!</button>*/}
            </div>

        </div>
    ),document.body)
}