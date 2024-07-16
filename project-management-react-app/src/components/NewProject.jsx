import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {

    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();
    const errorModal = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDesc = desc.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === ''){
            errorModal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDueDate
        })
    }

  return (
    <>
        <Modal ref={errorModal} buttonCaption="Close"> 
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-stone-400 mb-4">Please fill all the fields</p>
        </Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <Input ref={title} type='text' label="Title" />
        <Input ref={desc} label="Description" textarea />
        <Input ref={dueDate} type='date' label="Due Date" />
        </div>
    </>
  );
}
