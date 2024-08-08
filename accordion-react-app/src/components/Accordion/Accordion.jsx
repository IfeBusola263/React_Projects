import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionContext = createContext({
    openItemId: null,
    toggle: () => {},
  });

export function useAccodionContext(){
    const ctx = useContext(AccordionContext);

    if (!ctx){
        throw new Error('Can only be used with Accordion Items');
    }

    return ctx;
  }

export default function Accordion({ children, className }) {
    const [id, setId] = useState();

  function toggle(id){
    setId(prevId => prevId == id ? null : id );
  }

  const contextValue = {
    openItemId: id,
    toggle
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;