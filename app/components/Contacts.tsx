import { HStack } from '@chakra-ui/react';
import Contact from './Contact';

export type ContactsProps = {
  contacts: Array<{
    link: string;
    id: string;
    color: string;
  }>;
};

export default function Contacts(props: ContactsProps) {
  const { contacts } = props;
  return (
    <HStack spacing={4} mt={4}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </HStack>
  );
}
