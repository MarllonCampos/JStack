/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Header, ListHeader, Card, InputSearchContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import formatPhone from '../../utils/formatPhone';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (res) => {
        const json = await res.json();
        setContacts(json);
      })

      .catch((error) => console.log({ error }));
  }, [orderBy]);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length}
          {' '}
          {contacts.length === 1 ? 'contato' : 'contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListHeader>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Arrow" className={`${orderBy}`} />
        </button>
      </ListHeader>

      {contacts.map(({
        category_name, email, id, name, phone,
      }) => (
        <Card key={id}>
          <div className="info">
            <div className="contact-name">
              <strong>{name}</strong>
              {category_name && <small>{category_name}</small>}
            </div>

            <span>{email}</span>
            <span>{formatPhone(phone)}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${id}`}>
              <img src={edit} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      ))}

    </Container>

  );
}
