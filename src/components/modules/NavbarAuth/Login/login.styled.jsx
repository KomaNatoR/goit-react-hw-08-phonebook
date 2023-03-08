import styled from "@emotion/styled";

export const LoginMainDiv = styled.div`
    width: 461px;
    // height: 461px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 10px 20px;

    text-align: end;
    border: 3px solid darkolivegreen;
    border-radius: 8px;
    color: darkolivegreen;
        
    font-weight: 700;
    font-size: 24px;

    h2 {
        margin: 0;
    }
    form {
        margin-top: 222px;
        margin-bottom: 0px;
    }
    form div {
        margin-bottom: 12px;
    }
    form input {
        margin-left: 22px;
        height: 24px;

        // background-color: lightgrey;
        border: 1px solid darkolivegreen;
        border-radius: 3px;

        :focus {
            margin-left: 2px;

            background-color: lightgrey;
            border: 0px solid red;
            border-radius: 3px;
            outline: darkolivegreen solid 2px;
        }
    }
    form button {
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

    }
`;