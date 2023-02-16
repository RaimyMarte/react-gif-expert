import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp"

export const AddCategory = ({ NewCategory }) => { 

    const [inputValue, setInputValue] = useState('Demon Slayer')

    // const onInputChange = event => setInputValue(event.target.value)
    const onInputChange = ({ target }) => setInputValue(target.value)

    const onSubmit = event => {
        event.preventDefault()
        if (inputValue.trim().length <= 1) return

        NewCategory(inputValue.trim())
        setInputValue ('')
    }

    return (
        <form action="post" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                // onChange={event => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
    )
}