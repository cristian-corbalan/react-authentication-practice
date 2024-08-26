import { redirect } from 'react-router-dom';

export function getAuthToken () {
  const authToken = localStorage.getItem('token') ?? sessionStorage.getItem('token');

  if (!authToken) {
    return null;
  }

  const duration = getTokenDuration();

  if (duration <= 0) {
    return 'EXPIRED';
  }

  return authToken;
}

export function removeAuthToken () {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('expiration');
  return null;
}

export function tokenLoader () {
  return getAuthToken();
}

export function authRequiredLoader () {
  const authToken = getAuthToken();

  if (!authToken) {
    return redirect('/auth');
  }

  return null;
}

export function getTokenDuration () {
  const storedExpirationDate = localStorage.getItem('expiration') ?? sessionStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  return expirationDate.getTime() - now.getTime();
}
