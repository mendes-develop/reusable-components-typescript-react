import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'

const Button = (props)=>{
    return(
        <SearchButton>
            {props.children}
        </SearchButton>
    )
}

const SearchBar = (props) => {
  return (
    <SerachBarContainer>
        <InputSearch />
        <Button><FontAwesomeIcon icon={faSearch} color="var(--main-text-color)" /></Button>
    </SerachBarContainer>
  );
};


const InputSearch = styled.input`
  border: 1px solid black;
  background: turquoise;
  border-radius: 10px;
  width: 800px;
  padding: 0.5em;
  font-size: 1.2rem;
`
const SearchButton = styled.button`
  border: 1px solid black;
  background: turquoise;
  border-radius: 10px;
  display:inline-block;
  padding: 0.5em;
  margin-left: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    border: 2px solid black; // <Thing> when hovered
  }
`
const SerachBarContainer = styled.form`
  /* border: 1px solid blue; */
  /* padding: 0px auto; */
  display: flex;
  align-items: center;
  justify-content: center;


`

export default SearchBar;
