import React from 'react';
import { HStack } from '@chakra-ui/react';
import Contact, { ContactProps } from './Contact';

export type ContactListProps = {
  contacts: ContactProps[];
};
export default function ContactList(props: ContactListProps) {
  return (
    <HStack ml="45px" mt="-15px">
      {props.contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </HStack>
  );
}
