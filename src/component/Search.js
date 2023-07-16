import { useRef } from "react";

const Search = (props) => {
    const searchInput = useRef()
    return (
        <>
            <form className="d-flex" role="search">
                <input className="form-control me-2 w-25 shadow-none" type="search"
                value={props.search} placeholder="Search"
                 onChange={() => props.eventHandler(searchInput.current.value)} aria-label="Search" ref={searchInput} />
                <button onClick={props.searchWeather} className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </>
    )
}
export default Search;