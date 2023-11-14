import { useContext } from 'react';
import { RecorridosContext } from './../context'

import '../styles/modal.css';


// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, close, children }) {
    
    const context = useContext(RecorridosContext);

    const handleClick = (event) => {
        event.stopPropagation();
    }

    const reset =()=>{
        context.setDataCurios({})
        context.setDataMediaHostpot([])
    }

    return (
        <article className={isOpen ? 'modal is-open' : 'modal'} >
            <button
                className="modal-close"
                onClick={() => { close(), reset() }}
            >X</button>
            <div className="modal-container" onClick={handleClick}>
                {children}
            </div>
        </article>
    );
}