import styled from "@emotion/styled";

export const MenuMainDiv = styled.div`
    // position: absolute;
    // top: 0;
    // left: 0;
    margin-left: auto;
    margin-right: auto;
    width: 501px;
    border: 3px solid #556b2f;
    border-radius: 8px;
    overflow: hidden;

    ul {
        padding: 0;
        margin: 0;
        height: 43px;

        display: flex;
        justify-content: space-between;
        list-style: none;
    }
    li {
        margin:0;
        width: calc(100% / 3);
    }
    a {
        display: inline-block;
        justify-content: center;
        text-align: center;
        padding: 10px 0;
        margin: 0;
        width: 100%;
        height: 100%;

        font-weight: 700;
        font-size: 18px;
        color: #d3d3d3;
        background-color: #556b2f;
        text-decoration: none;
    }
    a.active {
        color: #556b2f;
        background-color: #d3d3d3;
    }
`;