/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import { Link } from 'react-router-dom';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';
import magnifierQuestion from '../../assets/images/magnifier-question.svg';

import formatPhone from '../../utils/formatPhone';
import Loader from '../../components/Loader';
import Button from '../../components/Button';

import ContactsService from '../../services/ContactsService';

import {
  Container, Header, ListHeader,
  Card, InputSearchContainer, ErrorContainer, EmptyListContainer, SearchNotFoundContainer,
} from './styles';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const filteredContacts = useMemo(
    () => (contacts.filter((contact) => (contact.name
      .toLowerCase().includes(searchTerm.toLowerCase())))),
    [searchTerm, contacts],
  );
  const loadContacts = useCallback(async () => {
    setIsLoading(true);
    try {
      const contactsList = await ContactsService.listContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    const { value } = event.target;
    setSearchTerm(value);
  }

  const handleTryAgain = () => {
    loadContacts();
  };
  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input type="text" value={searchTerm} placeholder="Pesquisar contato" onChange={handleChangeSearchTerm} />
        </InputSearchContainer>
      )}

      <Header justifyContent={hasError
        ? 'flex-end'
        : (
          contacts.length > 0
            ? 'space-between'
            : 'center'
        )}
      >
        {(!hasError && contacts.length > 0) && (
          <strong>
            {filteredContacts.length}
            {' '}
            {filteredContacts.length === 1 ? 'contato' : 'contatos'}
          </strong>
        )}

        <Link to="/new">Novo contato</Link>
      </Header>
      {hasError && (
        <ErrorContainer>
          <img src={sad} alt="SAD" />
          <div className="details">
            <strong>Ocorreu um erro ao obter os seus contatos</strong>
            <Button type="button" onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}
      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt="empty-box" />

              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>&quot;Novo Contato&quot;</strong>
                à cima para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )}
          {filteredContacts.length > 0
            && (
              <ListHeader>
                <button type="button" onClick={handleToggleOrderBy}>
                  <span>Nome</span>
                  <img src={arrow} alt="Arrow" className={`${orderBy}`} />
                </button>
              </ListHeader>
            )}

          {(contacts.length > 1 && filteredContacts.length === 0) && (
            <SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />
              <span>Nenhum resultado foi enecontrado para
                &quot;<strong>{searchTerm}</strong>&quot;
              </span>
            </SearchNotFoundContainer>
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

        </>
      )}

    </Container>

  );
}
