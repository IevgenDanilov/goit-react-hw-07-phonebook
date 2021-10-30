import ContactsList from "../ContactsList";
import Form from "../Form";
import FilterInput from "../FilterInput";
const Phonebook = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <FilterInput />
      <ContactsList />
    </>
  );
};

export default Phonebook;
