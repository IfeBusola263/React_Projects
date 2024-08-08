import { createContext } from "react";
import { useAccodionContext } from "./Accordion";
import { useContext } from "react";

const AccordionItemContext = createContext();

export function useAccordionItemContext(){
    const ctx = useContext(AccordionItemContext);
    
    if (!ctx){
        throw new Error('Hook should only be used with components wrapped with <AccordionItem>!')
    }

    return ctx;
}

export default function AccordionItem({ id, className, children }) {
  return (
    // Since the value is not going to be dynamic
    <AccordionItemContext.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemContext.Provider>
  );
}
