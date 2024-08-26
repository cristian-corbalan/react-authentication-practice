export function getAuthToken () {
  return localStorage.getItem('token');
}

export function removeAuthToken () {
  return localStorage.removeItem('token');
}
export function tokenLoader () {
  return getAuthToken();
}
