import styled from "@emotion/styled";

export const ProfileMainDiv = styled.div`
    width: 461px;
    // height: 461px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 20px 20px;

    text-align: center;
    border: 3px solid darkolivegreen;
    border-radius: 8px;
    color: darkolivegreen;
        
    font-weight: 700;
    font-size: 24px;

    div {
        display:inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: lightgrey;
    }

    button {
        padding: 11px;

        font-weight: 700;
        font-size: 18px;
        
        background-color: transparent;
        border: 0px solid gray;
        border-radius: 3px;
        background-color: lightgrey;
        color: darkolivegreen;
        transition: all 200ms linear;
        
        :hover {
            cursor: pointer;
            color: lightgrey;
            background-color: darkolivegreen;
        }  
        :active {
            scale: 0.9;
        } 
`;