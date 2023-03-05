import styled from "@emotion/styled";
import main_page_img from "../../../img/main_page_img.jpg";

export const MainPageDiv = styled.div`
    width: 461px;
    height: 461px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 20px 10px 20px;

    text-align: center;
    border: 3px solid darkolivegreen;
    border-radius: 8px;
    color: darkolivegreen;

    background-image: url(${main_page_img});
    background-size: cover;

    p {
        margin-bottom: 44px;

        font-weight: 700;
        font-size: 24px;
    }
`;