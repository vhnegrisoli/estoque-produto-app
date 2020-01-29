import history from '../../history';

const TOKEN = 'token';
const BEARER = 'bearer ';
const LOGIN = '/login';
const DASHBOARD = '/dashboard';

export default function CheckToken() {
  let token = localStorage.getItem(TOKEN);
  if (!token) {
    history.push(LOGIN);
  } else {
    if (!token.toLowerCase().includes(BEARER)) {
      history.push(LOGIN);
    } else {
      history.push(DASHBOARD);
    }
  }
  return true;
}
