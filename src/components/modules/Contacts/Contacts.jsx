import { useSelector } from "react-redux";


import FormikForm from "./Form";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { MainDiv } from "./app.styled";

const Contacts = () => {
    const userName = useSelector(store => store.auth.user.name);
    // const isLogOutPage = useSelector(store => store.auth.token);
    // console.log("isLogOutpage",isLogOutpage);

    // if (isLogOutPage === "") return (
    //     <MainDiv>
    //         <h1>Please register or login to account to see your contacts!</h1>
    //     </MainDiv >
    // );
    return (
        <>
            <MainDiv>
                <h1>{userName}'s Phonebook</h1>
                <FormikForm/>
                
                <h2>Contacts</h2>
                <Filter/>
                <ContactList/>
            </MainDiv>
        </>
    );
};
export default Contacts;