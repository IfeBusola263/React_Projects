import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultsModal({ onReset, targetTime, timeLeft }, ref){

    const dialog = useRef();
    const userLost = timeLeft <= 0;
    const score = Math.round((1 - timeLeft / targetTime ) * 100);

    // This is the ref sent from outside the component to receive the props or methods managed by the 
    // Ref in this component, based on the method or props the component would have be available outside
    // the component.
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your Score is: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            {!userLost && <p>You stopped the timer with <strong>{timeLeft} seconds left.</strong></p>}
            <form method="dialog" onSubmit={onReset}><button >Close</button></form>

        </dialog>, document.getElementById('modal')
    );
});

export default ResultModal;