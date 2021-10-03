import styled from "styled-components";

export const Container= styled.div `
    padding:80px 20px;
    margin-left:70px;
`
export const Wrapper= styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    @media screen and (max-width:767px){
        display:flex;
        flex-direction:column;
        justify-content:flex-start;

    }

`

export const Column= styled.div `
    display:flex;
    flex-direction:column;
    margin-left:2px;
    @media screen and (max-width:767px){
        transform:translateX(-65px);
    }


`

export const Row= styled.div `
    display:grid;
    grid-template-columns:repeat(10,auto);
    grid-gap:5px;
    @media screen and (max-width:767px){
        display:grid;
        grid-template-columns:repeat(1,auto);
        grid-gap:5px;
    }


`
export const Title= styled.div `
    color:black;
    padding:18px 8px;
    margin-left:-7px;

`
export const Link= styled.div`
    color:black;
    text-decoration:none;
    padding:5px 0px;
    cursor:pointer;

`