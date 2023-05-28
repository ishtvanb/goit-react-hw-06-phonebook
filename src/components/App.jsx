import React from 'react';
import Wrapper from './Wrapper';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { PrimaryTitle, SecondaryTitle } from './Wrapper/Wrapper.styled';


export const App = () => {
  return (
    <Wrapper>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ContactsList />
    </Wrapper>
  );
};

