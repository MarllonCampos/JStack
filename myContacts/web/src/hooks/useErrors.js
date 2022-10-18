import { useState } from 'react';

function useErrors() {
  const [errors, setErrors] = useState([]);

  function setError({ field, message }) {
    const errorAlreadyExists = errors.find((error) => error.field === field);

    if (errorAlreadyExists) {
      return;
    }
    setErrors((prevState) => [...prevState, { field, message }]);
  }

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }
  function removeError(field) {
    setErrors((prevState) => prevState.filter((error) => error.field !== field));
  }

  return {
    errors, setError, removeError, getErrorMessageByFieldName,
  };
}

export default useErrors;
