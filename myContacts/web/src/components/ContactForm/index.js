import PropTypes from 'prop-types';
import { useState } from 'react';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { Form, ButtonContainer } from './styles';

function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  return (
    <Form>
      <FormGroup>
        <Input
          value={name}
          placeholder="Nome"
          onChange={(event) => { setName(event.target.value); }}
        />
      </FormGroup>

      <FormGroup
        error="O formato do e-mail é invalido"
      >
        <Input
          placeholder="E-mail"
          error
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
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
