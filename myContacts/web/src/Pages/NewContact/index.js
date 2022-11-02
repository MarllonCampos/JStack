// import { Container } from './styles';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,

      };
      console.log(contact);
      const response = await ContactsService.createContacts(contact);

      console.log(response);
    } catch (error) {
      alert('Ocorreu um erro ao cadastrar o contato');
    }
  };
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
    </>
  );
}

export default NewContact;
