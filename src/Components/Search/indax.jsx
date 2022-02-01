import { useState, useCallback } from "react"

import styled from "styled-components"
// import debounce from 'lodash.debounce';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`

const debounce = (func, time) => {
    let lastFunc;
    function result(...args) {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        func.apply(this , args)
      }, time);
    }
    return result
}

// const throttle = (func, time)=> {
//     let wait = false
//     function result(...args){
//         if(!wait){
//             func.apply(this, args)
//             wait = true
//             setTimeout(() => {
//                 wait= false
//             },time)
//         }
//     }
//     return result
// }

const Search = () => {
    const [search, setSearch] = useState('')

    const changeHandler = event => {
        setSearch(event.target.value);
    };
    const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 300)
    , []);

    return(
        <Container>
            <input onChange={debouncedChangeHandler} type='text'/>
            <p>{search}</p>
        </Container>
    )
}

export default Search