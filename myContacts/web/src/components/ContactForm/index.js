/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import { useState } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { Form, ButtonContainer } from './styles';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);
    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }
  function handlePhoneChange(event) { setPhone(event.target.value); }
  function handleCategoryChange(event) { setCategory(event.target.value); }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name, email, phone, category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}

        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          value={phone}
          onChange={handlePhoneChange}

        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={handleCategoryChange}

        >
          <option default value="">Categoria</option>
          <option value="Instagram">Instagram</option>
          <option value="Discord">Discord</option>
          <option value="Twitter">Twitter</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>

      </ButtonContainer>
    </Form>
  );
}

export default ContactForm;
ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
