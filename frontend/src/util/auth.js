import { redirect } from 'react-router-dom';

export function getAuthToken () {
  return localStorage.getItem('token');
}

export function removeAuthToken () {
  return localStorage.removeItem('token');
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
