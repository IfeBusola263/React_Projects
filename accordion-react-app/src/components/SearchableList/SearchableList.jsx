import { useState, useRef } from "react"

export default function SearchableList({items,keyFunc, children}){
    const [searchTerm, setSearchTerm] = useState('');
    const lastSearch =  useRef();

    const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

    function handleInputChange(event){
        if (lastSearch.current){
            // restart timer if another letter was added to the search, before the timer expired
            clearTimeout(lastSearch.current);
        }

        // console.log(`Value of ref before timer ${lastSearch.current}`);
        
        // Implement debouncing
        lastSearch.current = setTimeout(() => {
            // Remove the value in the reference.
            lastSearch.current = null;
            // console.log(`Value of ref inside timer ${lastSearch.current}`);

            setSearchTerm(event.target.value);
        }, 700);

        // console.log(`Value of ref after timer ${lastSearch.current}`);
    }

    return <div className="searchable-list">
        <input type="search" name="" id="" onChange={handleInputChange} placeholder="Search" />
        <ul>
            {searchResults.map((result, idx) => <li key={keyFunc(result)}>{children(result)}</li>)}
        </ul>
    </div>
}