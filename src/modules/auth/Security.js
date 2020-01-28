const TOKEN = 'token';

export default function checkToken() {
  let jwtToken = localStorage.getItem(TOKEN);
  if (!jwtToken) {
    window.location.href = 'http://localhost:3000/login';
  }
}
