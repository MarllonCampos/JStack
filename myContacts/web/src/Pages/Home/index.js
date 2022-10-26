/* eslint-disable camelcase */
import React, { useEffect, useState, useMemo } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(
    () => (contacts.filter((contact) => (contact.name
      .toLowerCase().includes(searchTerm.toLowerCase())))),
    [searchTerm, contacts],
  );

  useEffect(() => {
    fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`)
      .then(async (res) => {
        const json = await res.json();
        setContacts(json);
      })

      .catch((error) => console.log({ error }));
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    const { value } = event.target;
    setSearchTerm(value);
  }

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" value={searchTerm} placeholder="Pesquisar contato" onChange={handleChangeSearchTerm} />
      </InputSearchContainer>
      <Header>
        <strong>
          {filteredContacts.length}
          {' '}
          {filteredContacts.length === 1 ? 'contato' : 'contatos'}
        </strong>
        <Link to="/new">Novo contato</Link>
      </Header>
      {filteredContacts.length > 0
        && (
          <ListHeader>
            <button type="button" onClick={handleToggleOrderBy}>
              <span>Nome</span>
              <img src={arrow} alt="Arrow" className={`${orderBy}`} />
            </button>
          </ListHeader>
        )}

      {filteredContacts.map(({
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
