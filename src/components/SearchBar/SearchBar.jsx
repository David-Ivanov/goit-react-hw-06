import { useId, useState } from "react"
import css from "./SearchBar.module.css";

export default function SearchBar({ search }) {

    const inputId = useId();

    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        const value = e.target.value
        setInputValue(value);
        search(value);
    }

    return (
        <div className={css.box}>

            <label htmlFor={inputId} className={css.label}>Find contacts by name</label>
            <input id={inputId} className={css.input} type="text" name="search" value={inputValue} onChange={handleChange} />

        </div>
    )
}