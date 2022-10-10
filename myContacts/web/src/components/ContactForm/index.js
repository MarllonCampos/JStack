/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import { useState } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { Form, ButtonContainer } from './styles';
import isEmailValid from '../../utils/email';

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
    if (!event.target.value) {
      setErrors((prevState) => [...prevState, { field: 'name', message: 'Nome é obrigatório' }]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'name'));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find((error) => error.field === 'email');
      if (errorAlreadyExists) return;
      setErrors((prevState) => [...prevState, { field: 'email', message: 'E-mail inválido' }]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'email'));
    }
  }
  function handlePhoneChange(event) { setPhone(event.target.value); }
  function handleCategoryChange(event) { setCategory(event.target.value); }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }
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
        <Button type="submit" disabled={errors.length > 0}>
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
