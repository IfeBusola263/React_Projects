import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
      variants={{
        startPoint: { x: 30, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exitPoint: {x: -40, opacity: 0}
      }}
        initial='startPoint'
        animate='visible'
        exit='exitPoint'
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
