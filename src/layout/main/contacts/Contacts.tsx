import React from 'react';
import {TitleContacts} from "./contactsTitle/TitleContacts";
import styled from "styled-components";
import {ContactsContent} from "./contactsContent/ContactsContent";
import {ContactsMedia} from "./contactsMedia/ContactsMedia";

export const Contacts = () => {
    return (
        <StyledContacts>
            <TitleContacts/>
            <ContactsContent/>
            <ContactsMedia/>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
    
`