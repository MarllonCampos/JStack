// import { Container } from './styles';

import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

function EditContact() {
  return (
    <>
      <PageHeader title="Editar *{contato}*" />
      <ContactForm buttonLabel="Salvar contato" />
    </>
  );
}

export default EditContact;
