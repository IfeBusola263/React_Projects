import { useAccodionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ children, className }) {
  const { openItemId } = useAccodionContext();
  const id = useAccordionItemContext();
  // check for item Id
  const isOpen = openItemId === id;
  return (
    <div className={isOpen ? `${className || ""} open` : `${className} close`}>
      {children}
    </div>
  );
}
