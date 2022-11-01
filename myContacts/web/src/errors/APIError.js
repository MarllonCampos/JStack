class APIError extends Error {
  constructor(response, body) {
    super();
    this.message = body?.error || `${response.status} - ${response.statusText}`;
    this.name = 'APIError';
    this.response = response;
  }
}

export default APIError;
