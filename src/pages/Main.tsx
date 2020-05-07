import React from 'react'
import styled from 'styled-components'
import SideNav from '../components/SideNav'
import SearchBar from '../components/SearchBar/SearchBar'
import Card from '../components/Card/Card'

const PageWrapper = styled.div`
border: 5px solid green;
display: flex;
padding: 20px;
`

const LeftSection = styled.div`
border: 1px solid yellow;
margin-right: 125px;
`

const RightSection = styled.div`
border: 1px solid red;
flex-grow: 1;
/* height: 50vh; */
`

const renderUsers = () => {
    return (
        [1,2,3].map((num, index) => <Card key={num} id={num}/> )
    )
}

const MainPage = () =>{
    return(
        <PageWrapper>
            <LeftSection>
                <SideNav/>
            </LeftSection>
            <RightSection>
                <SearchBar/>
                {renderUsers()}
            </RightSection>
        </PageWrapper>
    )
}

export default MainPage