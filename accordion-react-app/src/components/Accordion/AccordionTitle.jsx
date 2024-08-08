import { useAccodionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({className, children}) {
    const {toggle} = useAccodionContext();
    const id = useAccordionItemContext();
    
  return <h3 className={className || ''} onClick={() => toggle(id)}>{children}</h3>;
}
