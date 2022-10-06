// import { Container } from './styles';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}

export default NewContact;
