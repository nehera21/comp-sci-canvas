import { HStack } from '@chakra-ui/react';
import Contact, { ContactProps } from './Contact';

export type ContactListProps = {
  contacts: ContactProps[];
};
export default function ContactList(props: ContactListProps) {
  return (
    <HStack spacing="2px" ml="20px">
      {props.contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </HStack>
  );
}
